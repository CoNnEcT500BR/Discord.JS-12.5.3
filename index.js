require('dotenv').config()
const Discord = require('discord.js')
const { readdirSync } = require('fs')
const Enmap = require('enmap')
const client = new Discord.Client()

/** Instancia de uma nova collection de comandos. */
client.commands = new Enmap()

// Guarda o timestamp do inicio para medir o uptime
client.startTime = Date.now()

/** Carregamos os commandos como uma collection. */
const cmdFiles = readdirSync('./commands/')
console.log('[LOG]', `Carregando o total de ${cmdFiles.length} comandos.`)
/** Para cada comando então é registrado na memoria,
 *  e monstrado ao console que o comando foi carregado com sucesso. */
cmdFiles.forEach(f => {
  try {
    const props = require(`./commands/${f}`)
    if (f.split('.').slice(-1)[0] !== 'js') return

    console.log('[LOG]', `Carregando comando: ${props.help.name}`)
    if (props.init) {
      props.init(client)
    }
    client.commands.set(props.help.name, props)
  } catch (e) {
    console.log(`Impossivel executar comando ${f}: ${e}`)
  }
})

/** Então carregamos o evento quase do mesmo modo que o processo dos comandos. */
const evtFiles = readdirSync('./events/')
console.log('[LOG]', `Carregando o total de ${evtFiles.length} eventos`)
evtFiles.forEach(f => {
  const eventName = f.split('.')[0]
  const event = require(`./events/${f}`)

  client.on(eventName, event.bind(null, client))
})

client.on('error', (err) => {
  console.log('error', err)
})

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];

});

/** Então finalmente iniciamos o Bot. */
client.login(process.env.token)
