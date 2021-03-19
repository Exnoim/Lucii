const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Luciferian")
.setTitle("<a:maple_leaf:742698148329291826>» Moderasyon komutları <a:maple_leaf:742698148329291826>")
.setDescription("<:x2:717512607074091028> **kayıt-bilgi** = Kayıt için bilgi.  \n <:x2:717512607074091028> **m!taç** = Sunucunun sahibini gösterir.  \n <:x2:717512607074091028> **m!up** = Botunuzun 7/24 yapmak için gerekli bilgi... \n <:x2:717512607074091028> **m!sil** = Yazdığınız miktarda mesajı siler.  \n <:x2:717512607074091028> **m!ban** = Etiketlediğiniz kişiyi banlarsınız.  \n <:x2:717512607074091028> **m!kick** = Etiketlediğiniz kişiyi atarsınız.  \n <:x2:717512607074091028> **m!duyuru** = Bota duyuru yaptırırsınız.  \n <:x2:717512607074091028> **m!küfür** = Küfür engel sistemini açarsınız.  \n <:x2:717512607074091028> **m!reklam** = Reklam engel sistemi açarsınız.  \n <:x2:717512607074091028> **m!slowmode** = Yavaş modu ayarlarsınız. > \n <:x2:717512607074091028> **m!forceban** = Birisine id ban atarsınız.  \n <:x2:717512607074091028> **m!unban** = Birisinin banını açarsınız.  \n <:x2:717512607074091028> **m!sa-as** = Bot biri sa dedimi cevap verir. \n <:x2:717512607074091028> **m!sunucubilgi** = Sunucu bilgilerini görürsün.  \n <:x2:717512607074091028> **m!üyedurum** = Üyelerin durumlarını görürsün. \n <:x2:717512607074091028> **m!çekiliş** = Çekiliş başlatırsınız.")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-moderasyon'
}