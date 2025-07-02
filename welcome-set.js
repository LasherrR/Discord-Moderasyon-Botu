const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "welcome-set",
  description: "Hoş geldin mesajı kanalını ayarlar",
  async execute(message, args, client) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const channel = message.mentions.channels.first();
    if (!channel) return message.reply('Bir kanal etiketle!');
    client.welcomeChannel = channel.id;
    message.reply(`👋 Hoş geldin kanalı ${channel} olarak ayarlandı!`);
  }
}; 