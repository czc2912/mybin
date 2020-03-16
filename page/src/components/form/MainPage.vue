<template>
    <div id="form">
        <div class="block">
            <h1>
                Mybin
            </h1>
            <div class="desc">
                This site is intended for use as a short-term exchange of pasted information between parties. All submitted data is considered public information. Submitted data is not guaranteed to be permanent, and may be removed at any time. Please do not set up programs to send data to this site in an automated fashion; it is intended to be used directly by humans.</br>
                <br>
                Should you reasonably believe that any third-party content you access through this websites is in breach of any law, regulation or third party’s rights, you should notify Canonical in writing through rt@ubuntu.com. In doing so, please follow the guidelines indicated in our website terms under the section Links and third-party content.
            </div>
            <form action="http://localhost:3000/add" method="post" >
                <table>
                    <tr>
                        <td><p class="left">Poster:</p></td>
                        <td>
                            <input type="text" name="poster" />
                            <p class="helper">Your name (30 characters max)</p>
                        </td>
                    </tr>
                    <tr>
                        <td><p class="left">Syntax:</p></td>
                        <td>
                            <select class="syntaxSelect" name="syntax" >
                                <option v-for="(syntax,index) in syntaxs" :value="syntax" :key="index">{{syntax}}</option>
                            </select>
                            <p class="helper">Only Plain Text is available now!</p>
                        </td>
                    </tr>
                    <tr>
                        <td><p class="left">Expiration:</p></td>
                        <td>
                            <select class="expirationSelect" name="expiration" >
                                <option v-for="(time,index) in expiration" :value="time" :key="index" size=5>{{time}}</option>
                            </select>
                            <p class="helper">Paste expirations (or lack thereof) are approximate and not guaranteed</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="middle"><p  class="left">Content:</p></td>
                        <td class="contentWrapper"><textarea class="content" rows="15" type="text" name="content" /></td>
                    </tr>
                </table>
                <input class="pasteButton" type="submit" value="Paste!"/>
                <!-- <input class="pasteButton" type="submit" id="submit" name="submit_button" value="Paste!" /> -->

            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            syntaxs:["Plain Text"],
            expiration:["None","A Day","A week","A month","A year"]
        }
    }
}
</script>

<style scoped>

.block{
    box-shadow:0 0 2px 1px #999;
    margin: -8px 64px 0 64px;
    padding-right: 12px;
    min-height: 600px;
    border-radius: 12px;
}
.block h1{
    padding-top: 12px;
    font-size: 48px;
}
.block .desc{
    text-align: left;
    margin: 36px 12px 0 12px;
    font-size: 12px;
    color: #999;
}
form{
    text-align: left;
    margin-left: 36px;
}
.left{
    font-size: 12px;
    color:rgb(231, 16, 59);
    font-weight: 800;
    margin-top: 24px;
    padding-right: 24px;
    padding-left: 24px;
    vertical-align: middle;
    margin-right: 12px;
}
.middle{
    display: table-cell;
    vertical-align: middle;
}
.syntaxSelect{
    width: 200px;
    color: balck;
}
.expirationSelect{
    width: 200px;
    font-size: 12px;
    color: balck;
}
.option{
    color: blue;
}
.contentWrapper{
    width: 100%;
    /* padding-left: 12px; */
}
.content{
    margin: 24px 0 0 0;
    padding: 0;
    width: 100%;
}

.helper{
    font-size: 12px;
    color: #999;
    margin-bottom: -12px;
}
.pasteButton{
    margin-top: 12px;
    margin-left: 132px;
}
</style>