const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "antilink",
  description: "Link korumasını açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !antilink aç/kapat');
    message.client.antilink = action === 'aç';
    message.reply(`🛡️ Anti-link sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 