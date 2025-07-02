const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "purgeuser",
  description: "Kullanıcının mesajlarını siler",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply('Bu komutu kullanmak için `Mesajları Yönet` yetkisine sahip olmalısın.');
    const member = message.mentions.members.first();
    if (!member) return message.reply('Bir kullanıcı etiketle!');
    const amount = parseInt(args[1]) || 50;
    const messages = await message.channel.messages.fetch({ limit: 100 });
    const userMessages = messages.filter(m => m.author.id === member.id).first(amount);
    await message.channel.bulkDelete(userMessages);
    message.reply(`🗑️ ${member.user.tag} kullanıcısının ${userMessages.size} mesajı silindi!`).then(msg => setTimeout(() => msg.delete(), 3000));
  }
}; 