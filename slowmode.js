const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "slowmode",
  description: "Kanalın yavaş modunu ayarlar",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageChannels)) return message.reply('Bu komutu kullanmak için `Kanalları Yönet` yetkisine sahip olmalısın.');
    const seconds = parseInt(args[0]);
    if (isNaN(seconds) || seconds < 0 || seconds > 21600) return message.reply('0-21600 arası bir sayı belirt!');
    await message.channel.setRateLimitPerUser(seconds);
    message.reply(`🐌 Yavaş mod ${seconds} saniye olarak ayarlandı!`);
  }
}; 