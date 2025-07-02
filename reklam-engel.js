const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "reklam-engel",
  description: "Reklam engelleme sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !reklam-engel aç/kapat');
    message.client.reklamEngel = action === 'aç';
    message.reply(`🛡️ Reklam engelleme sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
};

// index.js dosyasına eklenmeli:
// client.on('messageCreate', ...) ile reklam kontrolü yapılmalı. 