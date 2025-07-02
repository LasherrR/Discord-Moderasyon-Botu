const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "joinlogs",
  description: "Katılma log kanalını ayarlar",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const channel = message.mentions.channels.first();
    if (!channel) return message.reply('Bir kanal etiketle!');
    message.client.joinLog = channel.id;
    message.reply(`📝 Katılma log kanalı ${channel} olarak ayarlandı!`);
  }
}; 