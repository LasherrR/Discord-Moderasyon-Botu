const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "rolkoruma",
  description: "Rol koruma sistemini açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) {
      return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    }
    const action = args[0];
    if (!action || !['aç', 'kapat'].includes(action)) {
      return message.reply('Kullanım: !rolkoruma aç/kapat');
    }
    message.client.rolKoruma = action === 'aç';
    message.reply(`🛡️ Rol koruma sistemi ${action === 'aç' ? 'açıldı' : 'kapatıldı'}!`);
  }
};

// index.js dosyasına eklenmeli:
// client.on('roleDelete', ...), client.on('roleUpdate', ...), client.on('roleCreate', ...) ile koruma sağlanır. 