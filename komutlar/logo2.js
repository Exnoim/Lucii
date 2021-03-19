const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Luciferian")
.setTitle("<a:maple_leaf:742698148329291826> » Logo Komutları <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription("<:x2:717512607074091028> **kalp** = kalp logo oluşturur. \n ")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo2',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-logo2'
}