const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "acilmod",
  description: "Acil mod sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !acilmod aç/kapat');
    message.client.acilmod = action === 'aç';
    message.reply(`🚨 Acil mod sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 