const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: 'autobanword',
  description: 'Otomatik ban kelime sistemini yönetir',
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` yetkisine sahip olmalısın.');
    const action = args[0];
    const word = args[1];
    if (!action || !['ekle', 'sil', 'liste'].includes(action)) return message.reply('Kullanım: !autobanword ekle/sil/liste [kelime]');
    if (action === 'liste') {
      const words = message.client.banWords || [];
      message.reply(`🚫 Ban kelimeleri: ${words.join(', ') || 'Yok'}`);
    } else if (word) {
      if (!message.client.banWords) message.client.banWords = [];
      if (action === 'ekle') {
        message.client.banWords.push(word);
        message.reply(`✅ "${word}" ban kelimesi eklendi!`);
      } else {
        message.client.banWords = message.client.banWords.filter(w => w !== word);
        message.reply(`❌ "${word}" ban kelimesi silindi!`);
      }
    }
  }
}; 