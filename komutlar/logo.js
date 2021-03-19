const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Luciferian")
.setTitle("<a:maple_leaf:742698148329291826> » Logo Komutları <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription("<:x2:717512607074091028> **grafiti** = grafiti logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **discord** = discord logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **gold** = gold logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **camic** = comic logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **bubble2** = bubble ama renkli logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **bubble** = bubble logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **dinamik** = Dinamik logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **altın** = Altın logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **banner** = Banner logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **basit** = Basit logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **elmas** = Elmas logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **neonmavi** = Neon mavi logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **kalın** = Kalın logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **anime** = Anime yazı tipinde logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **habbo** = Habbo yazı tipinde logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **arrow** = Ok işaretli logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **green** = Yeşil logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **alev** = Alevli logo oluşturur. <a:warning:749525084586115153> \n <:x2:717512607074091028> **red** = Kırmızı logo oluşturur. <a:warning:749525084586115153>")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-logo'
}