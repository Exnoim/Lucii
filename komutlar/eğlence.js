const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("» Luciferian")
.setTitle("<a:maple_leaf:742698148329291826> » Eğlence Komutları <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription("<:x2:717512607074091028> **zarat** =  zar atmaya ne dersin benim,rekorum 5 gecebilirmisin?.  \n <:x2:717512607074091028> **kasaaç** =  CsGo kasası açmaya ne dersin?.  \n <:x2:717512607074091028> **emojiyazı** =  Emojili yazı yazmaya ne dersin?.  \n <:x2:717512607074091028> **espiri** =  Sana güzel bi espiri yapmama ne dersin?.  \n <:x2:717512607074091028> **sor** = bana soru sormaya ne dersin.  \n <:x2:717512607074091028> **ara112** = İhtiyacın oldunda kullan ;)  \n <:x2:717512607074091028> **vine** = Raskele komik paylaşımları görmeye ne dersin..!  \n  <:x2:717512607074091028> **adamasmaca** = Birlikte bir oyun oynamaya ne dersin **adam asmaca**.  \n  <:x2:717512607074091028> **balıktut** = birlikte balık tutmaya ne dersin :D?.  \n <:x2:717512607074091028> **tersyazı** = Bir Yazıyı Bot Ters Yazar.  \n <:x2:717512607074091028> **mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n <:x2:717512607074091028> **fbi** = Bot FBi Gif Atar.  \n <:x2:717512607074091028> **token** = Tokenimi Öğrenmek İstemezmisin?  \n <:x2:717512607074091028> **düello** = Düello Atarsın.  \n <:x2:717512607074091028> **wasted** = Polis tarafından yakalanırsın.  \n <:x2:717512607074091028> **atatürk** = Dene ve gör... (1881-1938)   \n <:x2:717512607074091028> **yumruk-at** = istediğin kişinin gafasına yumruk atar ")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'-eğlence'
}