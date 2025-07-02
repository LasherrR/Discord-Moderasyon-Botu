module.exports = {
  name: "mesajrapor",
  description: "Mesaj istatistiklerini gösterir",
  async execute(message) {
    message.client.mesajSayisi = message.client.mesajSayisi || {};
    const total = Object.values(message.client.mesajSayisi).reduce((a, b) => a + b, 0);
    message.reply(`💬 Toplam mesaj sayısı: ${total}`);
  }
}; 