const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "kanalkoruma",
  description: "Kanal koruma sistemi",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) return message.reply('Kullanım: !kanalkoruma aç/kapat');
    message.client.kanalKoruma = action === 'aç';
    message.reply(`🛡️ Kanal koruma sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
};

// index.js dosyasına eklenmeli:
// client.on('channelDelete', ...), client.on('channelUpdate', ...), client.on('channelCreate', ...) ile koruma sağlanır. 