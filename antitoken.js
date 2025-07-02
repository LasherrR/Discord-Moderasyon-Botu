const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "antitoken",
  description: "Token koruma sistemi",
  async execute(message, args, client) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !antitoken aç/kapat');
    message.client.antitoken = action === 'aç';
    message.reply(`🛡️ Anti-token sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 