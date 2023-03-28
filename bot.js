const discord = require("discord.js");
const client = new discord.Client();
function Rainbow(){
    var color = "";
    for(var i = 0; i < 3; i++) {
        var sub = Math.floor(Math.random() * 256).toString(16);
        color += (sub.length == 1 ? "0" + sub : sub);
    }
    return "#" + color;
}
client.on("ready", () => {
	console.log(`Бот запущен`);
	console.log(`Бот онлайн на ${client.guilds.size} Discord серверах`);
	console.log(`Всего аккаунтов ${client.users.size} `);
let statuses = [
	// `статусы бота`,
	]
setInterval(function(){
		let info = statuses[Math.floor(Math.random() * statuses.length)];
		client.user.setPresence({ game: { name: info, type: "PLAYING"}});
	}, 5000)
setInterval(()=>{
		client.guilds.find(guilds => guilds.id === "id сервера").roles.find(roles => roles.id === "id роли").setColor(Rainbow());
    }, 3500)
});
client.login("Токен бота");