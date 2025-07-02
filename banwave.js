const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "banwave",
  description: "Toplu ban sistemi",
  async execute(message, args, client) {
    if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) return message.reply('Bu komutu kullanmak için `Üyeleri Yasakla` yetkisine sahip olmalısın.');
    const subcmd = args[0];
    if (subcmd === 'limit') {
      const limit = parseInt(args[1]);
      if (isNaN(limit) || limit < 1) return message.reply('Geçerli bir limit girin.');
      client.settings = client.settings || {};
      client.settings.banwaveLimit = limit;
      message.channel.send(`Banwave limiti ${limit} olarak ayarlandı.`);
    } else if (subcmd === 'log') {
      const kanal = message.mentions.channels.first();
      if (!kanal) return message.reply('Bir kanal etiketle!');
      client.settings = client.settings || {};
      client.settings.banwaveLog = kanal.id;
      message.channel.send(`Banwave log kanalı <#${kanal.id}> olarak ayarlandı.`);
    } else {
      // !banwave @kullanıcı1 @kullanıcı2 ...
      const members = message.mentions.members;
      if (!members.size) return message.reply('Banlanacak kullanıcıları etiketle!');
      const limit = client.settings?.banwaveLimit || 10;
      let count = 0;
      for (const member of members.values()) {
        if (count >= limit) break;
        if (member.bannable) {
          await member.ban();
          count++;
        }
      }
      message.reply(`⛔ ${count} kullanıcı toplu olarak banlandı!`);
      if (client.settings?.banwaveLog) {
        const logChannel = message.guild.channels.cache.get(client.settings.banwaveLog);
        if (logChannel) logChannel.send(`${count} kullanıcı banlandı (Banwave).`);
      }
    }
  }
}; 