const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "duyuru",
  description: "Duyuru mesajı gönderir",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply('Bu komutu kullanmak için `Mesajları Yönet` yetkisine sahip olmalısın.');
    const content = args.join(' ');
    if (!content) return message.reply('Duyuru içeriği belirt!');
    message.reply(`📢 **DUYURU:** ${content}`);
  }
}; 