const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "otorol-log",
  description: "Otomatik rol log kanalını ayarlar",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const channel = message.mentions.channels.first();
    if (!channel) return message.reply('Bir kanal etiketle!');
    message.client.otorolLog = channel.id;
    message.reply(`📝 Otomatik rol log kanalı ${channel} olarak ayarlandı!`);
  }
}; 