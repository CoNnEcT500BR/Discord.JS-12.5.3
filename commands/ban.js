const Discord = require("discord.js");

module.exports = {
    run: (client, message, args) => {

      let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      message.delete();
      if (!bUser) return message.reply(`?? Talvez isso possa ajudá-lo: \`\`\`${process.env.prefix}${module.exports.help.usage}\`\`\``)
      let bReason = args.join(" ").slice(22);
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Você não pode fazer isto :c')
      if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Esse usuário não pode ser punido");
  
      let banEmbed = new Discord.RichEmbed()
      .setTitle("⛔ Banimentos ⛔")
      .setColor("#0b9fbc")
      .setThumbnail("")
      .addField("O usuário", `${bUser} foi banido`)
      .addField("Banido por", `<@${message.author.id}>`)
      .addField("Motivo", bReason)
      .setFooter("Equipe - Project Zorus", `${client.user.avatarURL}`)
      .setTimestamp();
  
      let banChannel = message.guild.channels.get("569728768109838375");
      if(!banChannel) return message.channel.send("Não foi possível encontrar o **CANAL**");
  
      message.guild.member(bUser).ban(bReason);
      banChannel.send(banEmbed);

    },

    conf: {
        onlyguilds: true
      },

    get help () {
        return {
          name: 'ban',
          category: 'Moderação',
          description: 'Banir alguém do servidor',
          usage: 'ban @menção motivo'
        }
    }
}
