const Discord = require("discord.js");

exports.run = (client, message) => {
  const EmbedPinCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle("**▬▬▬▬▬▬[** ©️ **» Luciferian Bot** ©️ **]▬▬▬▬▬▬**")
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1"
    ).setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/NMnPUjK)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=771311130890993680&permissions=8&scope=bot)** **•** **[Web-Site]( https://hammerhead-spark-sheet.glitch.me/index.html)**
Bir komut hakkında detaylı __yardım için__: **-yardım**

• Bot ile ilgili tavsiyelerinizi veya bulduğunuz hataları **-istek-kod** yazarak bize iletebilirsiniz.
• Hatalı bi kod veya buglu bi kod bulursanız **-bug-bildir** yazarak bize bildirebilirsiniz.

**• Komutlar**
> [m!moderasyon](https://discord.gg/NMnPUjK) → Moderasyon komudları görüntüler.
> [m!kullanıcı](https://discord.gg/NMnPUjK) → Kullanıcı komutları.
> [m!eğlence](https://discord.gg/NMnPUjK) → eğlence komutları.
> [m!eğlence2](https://discord.gg/NMnPUjK) → eğlence komutları.
> [m!logo](https://discord.gg/NMnPUjK) → Logo komutları.
> [m!logo2](https://discord.gg/NMnPUjK) → logo komutları.

**▬▬▬▬▬▬▬[** :gear:  **Bilgilendirme**  :gear: **]▬▬▬▬▬▬**
> :bulb: **Discord Js Sürümü : 12.4.0**
> :robot: **quick.db Sürümü : 7.1.2**
> :eye_in_speech_bubble: **moment Sürümü : 2.29.1**
© 2021 Luciferian | Tüm hakları saklıdır.
@Exnoim#0015:flag_tr: 
`);

  return message.channel.send(EmbedPinCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "34857438753489",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-yardım"
};
