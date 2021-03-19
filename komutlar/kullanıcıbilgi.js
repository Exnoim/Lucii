const { Discord, MessageEmbed } = require('discord.js')
const moment = require('moment')
moment.locale('tr')

exports.run = function(client, message, args) {
 const kisi = message.mentions.users.first() || message.author;
 var x
 switch (kisi.presence.status) {
     case 'online': x ='<:cevrimici:716604543286378527>'
     break;
     case 'dnd': x='<:rahatszetme:716310838956261489> '
     break;
     case 'offline': x='<:cevrimdisi:716604689516331048>'
     break;
     case 'idle': x='<:beklemede:716604426055581756>'
     break
 }
 var f =''
 if(kisi.presence.activities.map(a=>a.state)) f=kisi.presence.activities.map(a=>a.state)
 if(kisi.presence.activities.map(a=>a.state) =='') f='Yok'
 let k 
 if(kisi.lastMessageChannelID) k= `<#${kisi.lastMessageChannelID}>`
 if(!kisi.lastMessageChannelID) k= `Yok`
 const m = message.guild.members.cache.find(a=>a.id == kisi.id)
 const embed = new MessageEmbed()
  .setThumbnail(kisi.displayAvatarURL({size:4096,dynamic:true}))
        .setColor('#00FF0A')
        .addField('<a:hypesquad:719126237120823386> Kullanıcı adı:',kisi.username)
        .addField('<a:hypesquad:719126237120823386> Kullanıcı tagı:',kisi.tag)
        .addField('<a:hypesquad:719126237120823386> Kullanıcı ID:',kisi.id)
        .addField('<a:hypesquad:719126237120823386> Kullanıcı #:',kisi.discriminator)
        .addField('<a:hypesquad:719126237120823386> Kullanıcı botmu:',kisi.bot? 'Evet':'Hayır')
        .addField('Kullanıcı oluşturulma tarihi:',moment(kisi.createdAt).format("YYYY-MMMM-D  0h:mm:ss"))
        .addField('<a:hypesquad:719126237120823386> Son mesajı:',kisi.lastMessage? kisi.lastMessage:'Yok')
        .addField('<a:hypesquad:719126237120823386> Son mesaj attıgı kanal',k)
        .addField('<a:hypesquad:719126237120823386> Kullanıcı durum:',x)
        .addField('<a:hypesquad:719126237120823386> Kullanıcı durum mesajı',f)
        .addField('<a:hypesquad:719126237120823386> Rolleri:',m.roles.cache.filter(a=>a.name !="@everyone").map(a=>a))
        .addField('<a:hypesquad:719126237120823386> Sunucuya girme zamanı:',moment(m.joinedAt).format('YYYY-MMMM-D 0h:mm:ss'))
        .setFooter(`${client.user.username} Kullanıcı bilgi sistemi.`,message.guild.iconURL({dynamic:true}))
        .setTimestamp()        
        message.channel.send(embed)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kullanıcı-bilgi","kullanıcıbilgi"],
  permLevel: 0
};

exports.help = {
  name: 'kb',
};