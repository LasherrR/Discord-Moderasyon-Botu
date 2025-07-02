const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "otomatikkayitrol",
  description: "Otomatik kayıt rolünü ayarlar",
  async execute(message, args, client) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !otomatikkayitrol aç/kapat');
    message.client.otomatikkayitrol = action === 'aç';
    message.reply(`🛡️ Otomatik kayıt rol sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
}; 