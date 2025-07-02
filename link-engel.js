const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "link-engel",
  description: "Link engelleme sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !link-engel aç/kapat');
    message.client.linkEngel = action === 'aç';
    message.reply(`🛡️ Link engelleme sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
};

// index.js dosyasına eklenmeli:
// client.on('messageCreate', ...) ile link kontrolü yapılmalı. 