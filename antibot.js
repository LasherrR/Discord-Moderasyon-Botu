const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "antibot",
  description: "Bot koruma sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !antibot aç/kapat');
    message.client.antibot = action === 'aç';
    message.reply(`🛡️ Anti-bot sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 