const discord = require('discord.js');
const interval = 3000
const prefix = "!!";
const client = new discord.Client();
	client.on('ready', () => {
		console.log(`Бот запущен`);
		console.log(`Бот онлайн на ${client.guilds.size} Discord серверах`);
		console.log(`Всего аккаунтов ${client.users.size} `);
let statuses = [
// `статусы бота`,
]
setInterval(function(){
let GAMES = statuses[Math.floor(Math.random() * statuses.length)];
client.user.setPresence({ game: { name: GAMES }, type: 0, status: 'online' });
}, 3000)
});
	client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).split(' ');
    const cmd = args.shift().toLowerCase();
    const Role = args.join(" ");
    const random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    const rRole = msg.guild.roles.find(role => role.name === Role);
    function Rianbow() {
        let random = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        let rRole = msg.guild.roles.find(role => role.name === Role);
        rRole.edit({color: random}).catch(e => {
        })
    };
    if(cmd === 'rainbow'){
        if (!msg.member.hasPermission('SEND_TTS_MESSAGES')) 
			return msg.channel.send(`** Вы не имеете прав на использование данной команды!**`)
        if (!Role) return msg.channel.send('Пожалуйста, введите роль после !!rainbow или !!r.');
        if (!rRole) return msg.channel.send('Неправильная роль. Попробуйте еще раз.');
            setInterval(() => { Rianbow(); }, interval)
            msg.channel.send({
                embed: {
                    description: `Роль **${Role}** теперь меняется каждые 5 секунд!`
                }
            })
    }
    if(cmd === 'r'){
        if (!msg.member.hasPermission('SEND_TTS_MESSAGES')) 
			return msg.channel.send(`** Вы не имеете прав на использование данной команды!**`)
        if (!Role) return msg.channel.send('Пожалуйста, введите роль после !!rainbow или !!r.');
        if (!rRole) return msg.channel.send('Неправильная роль. Попробуйте еще раз.');
            setInterval(() => { Rianbow(); }, interval)
            msg.channel.send({
                embed: {
                    description: `Роль **${Role}** теперь меняется каждые 3 секунды!`
                }
            })
    }
	if(cmd === 'help'){
            msg.channel.send({
                embed: {
                    description:
					`Используйте __!!rainbow **(Role)**__ или __!!r **(Role)**__,
					где **(Role)** это роль которую вы хотите сделать __Радужной__.
					__**Не используйте "@"**__ перед нписанием роли.
					Бота можно использовать только __**Пользователям сервера с ролью Color**__!`
					}
			})	
	}  
	});
client.login("токен бота");