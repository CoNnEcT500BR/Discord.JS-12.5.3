const Discord = require("discord.js");

module.exports = {
    run: (client, message, args) => {

    message.delete();
    var finalA = '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
    var embed = new Discord.RichEmbed()
        .setColor(finalA)
        .setTitle(message.guild.name+' logotipo.')
        .setDescription("[Link Direto]("+message.guild.iconURL+")")
        .setImage(message.guild.iconURL)
        .setFooter("Equipe - Project Zorus", `${client.user.avatarURL}`)
        .setTimestamp()
    message.channel.send({embed});

    },

    conf: {
        onlyguilds: true
      },

    get help () {
        return {
          name: 'icone',
          category: 'Público',
          description: 'Envia o logo do servidor',
          usage: 'icone'
        }
    }
}
