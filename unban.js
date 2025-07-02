const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "unban",
  description: "Kullanıcının banını kaldırır",
  async execute(message, args, client) {
    if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) return message.reply('Bu komutu kullanmak için `Üyeleri Yasakla` yetkisine sahip olmalısın.');
    client.settings = client.settings || {};
    const subcmd = args[0];
    if (subcmd === 'log') {
      const kanal = message.mentions.channels.first();
      if (!kanal) return message.reply('Bir kanal etiketle!');
      client.settings.unbanLog = kanal.id;
      message.channel.send(`Unban log kanalı <#${kanal.id}> olarak ayarlandı.`);
    } else {
      const userId = args[0];
      if (!userId) return message.reply('Lütfen banı kaldırılacak kullanıcının ID\'sini belirtin.');
      try {
        await message.guild.bans.remove(userId);
        message.reply(`✅ Kullanıcının banı kaldırıldı!`);
        if (client.settings?.unbanLog) {
          const logChannel = message.guild.channels.cache.get(client.settings.unbanLog);
          if (logChannel) logChannel.send(`${userId} ID'li kullanıcının banı kaldırıldı.`);
        }
      } catch (err) {
        message.reply('Kullanıcı bulunamadı veya banlı değil.');
      }
    }
  }
}; 