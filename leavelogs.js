const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "leavelogs",
  description: "Ayrılma log kanalını ayarlar",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const channel = message.mentions.channels.first();
    if (!channel) return message.reply('Bir kanal etiketle!');
    message.client.leaveLog = channel.id;
    message.reply(`📝 Ayrılma log kanalı ${channel} olarak ayarlandı!`);
  }
}; 