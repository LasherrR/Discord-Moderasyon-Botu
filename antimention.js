const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "antimention",
  description: "Mention spam korumasını açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !antimention aç/kapat');
    message.client.antimention = action === 'aç';
    message.reply(`🛡️ Anti-mention sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 