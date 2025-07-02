module.exports = {
  name: "yardimiste",
  description: "Yardım isteği gönderir",
  async execute(message, args) {
    const reason = args.join(' ') || 'Sebep belirtilmedi';
    message.reply(`🆘 Yardım isteği gönderildi! Sebep: ${reason}`);
  }
}; 