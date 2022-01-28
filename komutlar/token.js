const Discord = require('discord.js');

exports.run = async(client, message) => {
     
      const vatan = new Discord.MessageEmbed()
    .setAuthor('İşte Tokenim')
    .setColor(3447003)
        .setImage(`https://tenor.com/bpR7G.gif`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'token',
  description: '',
  usage: ''
};





