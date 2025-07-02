const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "sistem-koruma",
  description: "Sistem koruma ayarlarını yönetir",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    const system = args[1];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !sistem-koruma aç/kapat [sistem]');
    if (!system) return message.reply('Sistem belirt! (antiraid, antispam, antilink, antibot)');
    message.client[system] = action === 'aç';
    message.reply(`🛡️ ${system} sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 