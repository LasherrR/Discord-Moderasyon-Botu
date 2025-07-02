const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "akillifiltre",
  description: "Akıllı filtre sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !akillifiltre aç/kapat');
    message.client.akillifiltre = action === 'aç';
    message.reply(`🛡️ Akıllı filtre sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 