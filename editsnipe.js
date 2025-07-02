module.exports = {
  name: 'editsnipe',
  description: 'Son düzenlenen mesajı gösterir',
  async execute(message) {
    const data = message.client.lastEdit || {};
    if (!data.content) return message.reply('Düzenlenen mesaj bulunamadı!');
    message.reply(`✏️ Son düzenlenen mesaj: **${data.content}** (yazan: ${data.author})`);
  }
}; 