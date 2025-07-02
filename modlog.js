const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "modlog",
  description: "Moderasyon log kanalını ayarlar",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const channel = message.mentions.channels.first();
    if (!channel) return message.reply('Bir kanal etiketle!');
    message.client.modLog = channel.id;
    message.reply(`📝 Moderasyon log kanalı ${channel} olarak ayarlandı!`);
  }
}; 