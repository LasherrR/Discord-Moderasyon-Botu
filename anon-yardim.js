module.exports = {
  name: "anon-yardim",
  description: "Anonim yardım isteği gönderir",
  async execute(message, args) {
    const reason = args.join(' ') || 'Sebep belirtilmedi';
    message.reply(`🆘 Anonim yardım isteği gönderildi! Sebep: ${reason}`);
  }
}; 