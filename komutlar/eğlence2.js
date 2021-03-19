const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Luciferian")
.setTitle("<a:maple_leaf:742698148329291826> » Eğlence Komutları <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription("<:x2:717512607074091028> **yazan-kazanır** =  Yazan karanır oyununu oynadıktan sonra tekrar oynamaya ne dersin?.  \n <:x2:717512607074091028> **kapaklaf** =  Birine güzel bi söz sözlemeye ne dersin?. \n <:x2:717512607074091028> **kralol** =  Kral olmaya ne dersin?. \n")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence2',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-eğlence'
}