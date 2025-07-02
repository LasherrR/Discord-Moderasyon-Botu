const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "capslock-engel",
  description: "Capslock koruma sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !capslock-engel aç/kapat');
    message.client.capslockEngel = action === 'aç';
    message.reply(`🛡️ Capslock koruma sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
};

// index.js dosyasına eklenmeli:
// client.on('messageCreate', ...) ile capslock kontrolü yapılmalı. 