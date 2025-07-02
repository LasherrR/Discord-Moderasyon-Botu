const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "isimfiltresi",
  description: "İsim filtresi sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !isimfiltresi aç/kapat');
    message.client.isimFiltresi = action === 'aç';
    message.reply(`🛡️ İsim filtre sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 