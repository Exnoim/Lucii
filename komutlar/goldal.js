const ayarlar = require("../ayarlar.json")   
const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client();

exports.run = async (client, message, args) => {
 if (!message.guild) {
  return }
 if(message.author.id != ayarlar.sahip) { return message.channel.send(":x: Bu komutu sadece geliştirici kullanabilir.")}

  let nesne = args[0]
  if (!nesne) return message.channel.send('Bir kullanıcının IDsini girmelisin?')
 
  db.delete(`gold_${nesne}`, 'gold')
 
   client.channels.get('PREMİUM LOG KANAL ID').send(`\`${nesne}\` ID Kullanıcı Pre Üye Süresi Bitti  <:639093401928597517:638807997522378752>`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'preal',
  description: '[Admin Komutu]',
  usage: 'goldsil <ID>'
};