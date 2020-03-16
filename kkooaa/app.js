const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
var mongoose = require('mongoose');
const bodyParser = require('koa-bodyparser')
const crypto = require('crypto');
const tokenpage = require('./tokenpage');
var tokenUrl;

var router=new Router();

let databaseUrl='mongodb+srv://mybinApp:czc545113czc@cluster0-7jbmn.azure.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(databaseUrl,{useNewUrlParser: true,  useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'database connection error:'));
db.once('open', function() {
  console.log("database connected");
});
var pasteSchema = mongoose.Schema({
  token: String,
  poster: String,
  syntax: String,
  expiration: String,
  content: String
})
var paste = mongoose.model('paste',pasteSchema);


app.use(bodyParser())//bodyparse中间件，把post中的data放入ctx.request.body;
router.get('/', function (ctx, next) {
  ctx.body="Hello koa";
})
router.post('/add',async (ctx,next)=>{//form用的是post
  obj=ctx.request.body;
  var md5 = crypto.createHash('md5');//创建一个md5 hash算法
  md5.update(obj.poster);
  md5.update(obj.content);
  token=md5.digest('hex')
  obj.token=token;
  var pasteobj = new paste(obj);
  await pasteobj.save((err,obj)=>{
    if(err){
      console.log(err);
    }
  })
  tokenUrl="http://localhost:3000/"+token;
  
  ctx.body=tokenpage(obj.poster,tokenUrl);
});
router.get('/:token',async (ctx,next)=>{
  let token=ctx.params;
  let data;
  await paste.findOne(token,(err,docs)=>{
    data=docs;
  });
  ctx.body=data;
})

app.use(router.routes()); //作用：启动路由
app.use(router.allowedMethods());

app.listen(3000);
console.log("app started");


