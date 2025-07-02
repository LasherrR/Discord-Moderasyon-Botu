const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "antialt",
  description: "Alt hesap koruma sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !antialt aç/kapat');
    message.client.antialt = action === 'aç';
    message.reply(`🛡️ Anti-alt sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 