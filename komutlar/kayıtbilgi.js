const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Luciferian")
.setTitle("<:x2:717512607074091028> **m!kayıtol** = Yazarak kayıt olursunuz. \n<:x2:717512607074091028> **m!kayıtayarla** = Kayıt kanalını ayarlarsınız.  ")
.setDescription("Luciferian")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['kyb'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'kayıt-bilgi',
  category: 'moderasyon',
  description: 'Yardım Menüsü.',
   usage:'-kayıt-bilgi'
}