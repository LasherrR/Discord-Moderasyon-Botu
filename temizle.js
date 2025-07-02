const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "temizle",
  description: "Belirtilen sayıda mesajı siler",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply('Bu komutu kullanmak için `Mesajları Yönet` yetkisine sahip olmalısın.');
    const amount = parseInt(args[0]);
    if (!amount || amount < 1 || amount > 100) return message.reply('1-100 arası bir sayı belirt!');
    await message.channel.bulkDelete(amount);
    message.reply(`🗑️ ${amount} mesaj silindi!`).then(msg => setTimeout(() => msg.delete(), 3000));
  }
}; 