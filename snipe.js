module.exports = {
  name: "snipe",
  description: "Son silinen mesajı gösterir",
  async execute(message) {
    const data = message.client.lastDelete || {};
    if (!data.content) return message.reply('Silinen mesaj bulunamadı!');
    message.reply(`🕵️ Son silinen mesaj: **${data.content}** (yazan: ${data.author})`);
  }
}; 