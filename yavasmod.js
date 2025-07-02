const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: 'yavasmod',
  description: 'Yavaş mod sistemini açar/kapatır',
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !yavasmod aç/kapat');
    message.client.yavasmod = action === 'aç';
    message.reply(`🛡️ Yavaş mod sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 