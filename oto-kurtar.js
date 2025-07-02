const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "oto-kurtar",
  description: "Otomatik kurtarma sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !oto-kurtar aç/kapat');
    message.client.otokurtar = action === 'aç';
    message.reply(`🛡️ Otomatik kurtarma sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 