const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "antispam",
  description: "Spam korumasını açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !antispam aç/kapat');
    message.client.antispam = action === 'aç';
    message.reply(`🛡️ Anti-spam sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 