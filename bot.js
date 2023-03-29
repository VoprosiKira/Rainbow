/* КОНФИГ БОТА */

const token = 'токен'  // Токен бота
const servers = [               // ID Серверов
  'id сервера'
]
const roleName = [              // Имена ролей
  'имя роли'
]

const speed = 4000              // Скорость смены цвета
const logging = true            // Логин бота по токену

/* КОНФИГ БОТА */

/* СТАТУСЫ БОТА */

const typestatus = 'dnd'        // Тип статуса бота
                                 /* online - В сети
                                    dnd - Не беспокоить
                                    idle - Нет на месте */
const typeactivity = 'WATCHING' // Вид активности бота
                                 /* WATCHING - Смотрит
                                    LISTENING - Слушает
                                    PLAYING - Играет
                                    STREAMING - Стримит */

let statuses = [
//  'статус',
]

/* СТАТУСЫ БОТА */

const Discord = require('discord.js')
const client = new Discord.Client()

function Rainbow() {
  var color = ""
  for (var i = 0; i < 3; i++) {
    var sub = Math.floor(Math.random() * 256).toString(16)
    color += sub.length == 1 ? "0" + sub : sub
  }
  return '#' + color
}

function changeColor() {
  for (let index = 0; index < servers.length; ++index) {
    let server = client.guilds.get(servers[index])
    if (!server) {
      if (logging) {
        console.log(
          `[Ошибка] Сервер ${servers[index]} не найден, проверьте конфиг.`
        )
      }
      continue
    }

    let role = server.roles.find((r) => r.name === roleName[index])
    if (!role) {
      if (logging) {
        console.log(
          `[Ошибка] Роль ${roleName[index]} Не найдена на сервере ${servers[index]}, проверьте конфиг.`
        )
      }
      continue
    }

    role.setColor(Rainbow()).catch(console.error)

    if (logging) {
      console.log(
        `Применён цвет ${Rainbow()} для роли ${roleName[index]} на сервере ${servers[index]}`
      )
    }
  }
}

client.on('ready', () => {
  console.log(`-----------------Бот успешно запущен!-----------------`)
  console.log(`Бот онлайн на ${client.guilds.size} Discord серверах`);
  console.log(`Всего аккаунтов ${client.users.size} `);
  console.log(`------------------------------------------------------`)
  console.log(``)

  setInterval(function () {
    let activity = statuses[Math.floor(Math.random() * statuses.length)]
    client.user.setPresence({
      status: typestatus,
      game: {
        type: typeactivity,		  
	    name: activity },
    })
  }, speed)

  setInterval(changeColor, speed)
  changeColor()
})

client.login(token)
