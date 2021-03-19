const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Luciferian")
.setTitle("<a:maple_leaf:742698148329291826> » Kullanıcı Komutları <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription("<:x2:717512607074091028> **medya** = Sosyal medyalarım.  \n <:x2:717512607074091028> **toplamkomut** = Botta ne kadar komut oldunu gösterir.  \n <:x2:717512607074091028> **aile** = Ne kadar büyük bi aile oldumuzu öğrenmek istermisin?.  \n <:x2:717512607074091028> **say** = Sunucu bilgilerini gösterir.  \n <:x2:717512607074091028> **avatar** = Avatarınıza bakarsınız.  \n <:x2:717512607074091028> **yetkilerim** = Yetkilerini görürsün.  \n <:x2:717512607074091028> **profil** = Profilini görürsün.  \n <:x2:717512607074091028> **sunucuresmi** = Sunucu resmini gösterir.  \n <:x2:717512607074091028> **-ping** = Botun Pingine Bakarsın.  \n <:x2:717512607074091028> **id** = Birisinin id'sine Bakarsın.  \n <:x2:717512607074091028> **davet** = Beni Sunucuna Ekle.  \n <:x2:717512607074091028> **botbilgi** = Bot istatistiklerini görürsünüz.  \n <:x2:717512607074091028> **bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir.   \n <:x2:717512607074091028> **istek-kod** = Yazdığınız istek kodu yapımcılarıma bildirir.   ")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-kullanıcı'
}