const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "dogrulama",
  description: "Doğrulama sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !dogrulama aç/kapat');
    message.client.dogrulama = action === 'aç';
    message.reply(`🛡️ Doğrulama sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 