const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "antighostping",
  description: "Ghost ping korumasını açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !antighostping aç/kapat');
    message.client.antighostping = action === 'aç';
    message.reply(`🛡️ Anti-ghostping sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 