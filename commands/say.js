const Discord = require("discord.js");

module.exports = {
    run: (client, message, args) => {

      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("você não tem permissão.");
      let botmessage = args.join(" ");
      message.delete().catch();
      message.channel.send(botmessage);

    },

    conf: {
        onlyguilds: true
      },

    get help () {
        return {
          name: 'say',
          category: 'Moderação',
          description: 'Faz com que o bot mande uma mensagem',
          usage: 'say [Mensagem]'
        }
    }
}