const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
const istatistikler = new Discord.MessageEmbed()
  .addField(`:robot: |  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(`:mortar_board: | Yapımcım` ,`<@581556659344637968>`,true)
 .addField(`:rocket: | Toplam Kullanıcı`, `123446`, true)
 .addField(`:crystal_ball: | Toplam Sunucu`, `94`, true)
  message.channel.send(istatistikler)
}//lrows
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};
exports.help = {
  name: 'i',
  description: 'İstatistik Komutu',
  usage: 'i'
}; 