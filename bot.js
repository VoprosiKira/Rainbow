const discord = require("discord.js");
const client = new discord.Client();
let i = 0;
function rainbow(){
    const rainbowArr = ["#f44242","#f44a41","#f45241","#f45e41","#f46a41","#f47941","#f48541","#f49141","#f49d41","#f4ac41","#f4b841",
	"#f4c741","#f4d341","#f4df41","#f4ee41","#e8f441","#dff441","#d9f441","#d3f441","#caf441","#c1f441","#b8f441","#aff441","#a6f441",
	"#9df441","#94f441","#88f441","#7cf441","#73f441","#6af441","#5bf441","#49f441","#41f455","#41f467","#41f476","#41f485","#41f491",
	"#41f49d","#41f4ac","#41f4ca","#41f4df","#41f4f4","#41ebf4","#41dcf4","#41c7f4","#41b2f4","#419df4","#4182f4","#4176f4","#4161f4",
	"#4149f4","#4c41f4","#6741f4","#7c41f4","#8e41f4","#a041f4","#c441f4","#cd41f4","#df41f4","#f441e8","#f441af","#f44185","#f4417c"]
    let rainbow = rainbowArr[i];
    i += 1;
    if(i == 63){
        i = 0;
    }
    return rainbow;
}
client.on("ready", ()=>{
setInterval(()=>{
        client.guilds.find("id","id сервера").roles.find("id","id роли").setColor(rainbow());
    }, 2000)
});
client.login("токен бота");