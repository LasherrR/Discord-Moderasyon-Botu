module.exports = {
  name: "suggest",
  description: "Öneri gönderir",
  async execute(message, args) {
    const suggestion = args.join(' ');
    if (!suggestion) return message.reply('Öneri içeriği belirt!');
    message.reply(`💡 **ÖNERİ:** ${suggestion}`);
  }
}; 