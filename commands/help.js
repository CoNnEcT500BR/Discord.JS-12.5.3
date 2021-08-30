const Discord = require("discord.js");

module.exports = {
  run: (client, message, args) => {
    /** Objeto embed que irá ser enviado. */
    let embed = new Discord.MessageEmbed()
      .setTitle(`Painel de ajuda do ${client.user.username}`)
      .setColor("#2f4fc4")
      .setDescription('Todos os comandos disponíveis')
      .setFooter(`${client.user.username}`, `${client.user.displayAvatarURL()}`)

    /** Laço de repetição em todos os comandos
     * A cada comando é adicionado as informações em um object na array fields[]
     */
    client.commands.forEach(command => {
      embed.fields.push(
        {
          name: `**${process.env.prefix}${command.help.name}**`,
          value: `**Descrição**: ${command.help.description}\n**Como Usar**: ${process.env.prefix}${command.help.usage}
          **Categoria**: ${command.help.category}
          `,
        }
      )
    })

    /** Então envia a mensagem embed para o usuario. */
    message.channel.send({ embed: embed })
  },

  conf: {},

  help: {
    name: 'ajuda',
    category: 'Público',
    description: 'Mostra todos os comandos disponíveis do bot.',
    usage: 'ajuda'
  }
}
