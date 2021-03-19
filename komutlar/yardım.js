const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedNarcosCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle(
      "**▬▬▬▬▬▬[** ©️ ** Luciferian Bot** ©️ **]▬▬▬▬▬▬**  Prefixim: `m!`"
    )
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/727667205038145568.png?v=1"
    )
    .setDescription(
      `

**▬▬▬▬▬▬▬[** :closed_lock_with_key:  **Komut Listesi**   :closed_lock_with_key: **]▬▬▬▬▬▬**

> **<:x2:717512607074091028> moderasyon :** Moderasyon komudları görüntüler.
> **<:x2:717512607074091028> kullanıcı :** Userler için açık komudlar...
> **<:x2:717512607074091028> eğlence :** Sizi biraz eğlendirir.
> **<:x2:717512607074091028> eğlence2 :** size güzel komudlarımı göstereyim sizi eğlendirecek...
> **<:x2:717512607074091028> logo :** İstediniz şekillerde bi logo oluşturabilirsiniz...
> **<:x2:717512607074091028> logo2 :**logo2 kamutlarıyla sizlerle...

**▬▬▬▬▬▬▬[** <a:701462240263536671:716826648326045779>  **Bilgilendirme**  <a:701462240263536671:716826648326045779> **]▬▬▬▬▬▬**

> <a:hypesquad:719126237120823386> **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> <a:hypesquad:719126237120823386> **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/kkjaWUHK7e)**
> <a:hypesquad:719126237120823386> **Komut hakkında detaylı bilgi için: -yardım**
> <a:hypesquad:719126237120823386> **Discord Js Sürümü: 12.4.0**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/kkjaWUHK7e)** **•** **[Botun Davet Linki](https://discord.gg/kkjaWUHK7e)** **•** **[Web-Site]( https://discord.gg/kkjaWUHK7e)**
`
    )

    .setFooter(client.user.username + "", client.user.avatarURL)
    .setTimestamp();

  return message.channel.send(EmbedNarcosCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["help"],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-yardım"
};
