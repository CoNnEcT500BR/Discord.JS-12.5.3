const Discord = require("discord.js");

module.exports = {
    run: (client, message, args) => {

      let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      message.delete();
      if (!kUser) return message.reply(`?? Talvez isso possa ajudá-lo: \`\`\`${process.env.prefix}${module.exports.help.usage}\`\`\``)
      let kReason = args.join(" ").slice(22);
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Você não pode fazer isto :c')
      if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Esse usuário não pode ser punido");
  
      let kickEmbed = new Discord.RichEmbed()
      .setTitle("🚧 Expulsões 🚧")
      .setColor("#0b9fbc")
      .setThumbnail("")
      .addField("O usuário", `${kUser} foi expulso`)
      .addField("Expulso por")
      .addField("Motivo", kReason)
      .setFooter("Equipe - Project Zorus", `${client.user.avatarURL}`)
      .setTimestamp();
  
      let kickChannel = message.guild.channels.get("569728768109838375");
      if(!kickChannel) return message.channel.send("Não foi possível encontrar o **CANAL**");
  
      message.guild.member(kUser).kick(kReason);
      kickChannel.send(kickEmbed);

    },

    conf: {
        onlyguilds: true
      },

    get help () {
        return {
          name: 'kick',
          category: 'Moderação',
          description: 'Expulsar alguém do servidor',
          usage: 'kick @menção motivo'
        }
    }
}
