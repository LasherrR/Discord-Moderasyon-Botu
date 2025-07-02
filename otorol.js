const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "otorol",
  description: "Otomatik rol sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !otorol aç/kapat');
    message.client.otorol = action === 'aç';
    message.reply(`🛡️ Otomatik rol sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 