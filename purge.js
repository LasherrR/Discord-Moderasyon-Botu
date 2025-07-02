const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "purge",
  description: "Belirli türdeki mesajları toplu siler",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) return message.reply('Bu komutu kullanmak için `Mesajları Yönet` yetkisine sahip olmalısın.');
    const type = args[0];
    const amount = parseInt(args[1]) || 50;
    if (!type) return message.reply('Tür belirt! (bot, user, link, emoji)');
    const messages = await message.channel.messages.fetch({ limit: 100 });
    let filtered = messages;
    if (type === 'bot') filtered = messages.filter(m => m.author.bot);
    if (type === 'user') filtered = messages.filter(m => !m.author.bot);
    if (type === 'link') filtered = messages.filter(m => m.content.includes('http'));
    if (type === 'emoji') filtered = messages.filter(m => /<a?:.+?:\d+>/g.test(m.content));
    const toDelete = filtered.first(amount);
    await message.channel.bulkDelete(toDelete);
    message.reply(`🗑️ ${toDelete.length} ${type} mesajı silindi!`).then(msg => setTimeout(() => msg.delete(), 3000));
  }
}; 