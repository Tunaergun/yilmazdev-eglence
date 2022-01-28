const Discord = require("discord.js");

exports.run = (client, message) => {
  let üye = new Discord.MessageEmbed()
    .setAuthor("Toplam Üye")
    .setColor("RANDOM")
   .addField("**Toplam Üye**",message.guild.memberCount +"kişi")
  
    .setTimestamp()
  return message.channel.send(üye);
};

module.exports.conf = {
  aliases: ["üyedurum","üye"],
  permLevel: 0,
  enabled: true,
  guildOnly: true
};

module.exports.help = {
  name: "toplam-üye",
  description: "",
  usage: ""
};
