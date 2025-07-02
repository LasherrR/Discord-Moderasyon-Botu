const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "otoclean",
  description: "Otomatik temizlik sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !otoclean aç/kapat');
    message.client.otoclean = action === 'aç';
    message.reply(`🛡️ Otomatik temizlik sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 