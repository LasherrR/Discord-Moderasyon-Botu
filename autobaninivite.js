const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "autobaninivite",
  description: "Davet spam koruma sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !autobaninivite aç/kapat');
    message.client.autobaninivite = action === 'aç';
    message.reply(`🛡️ Davet spam koruma sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 