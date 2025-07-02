module.exports = {
  name: "say",
  description: "Sunucu istatistiklerini gösterir",
  async execute(message) {
    const total = message.guild.memberCount;
    const online = message.guild.members.cache.filter(m => m.presence && m.presence.status !== 'offline').size;
    const bot = message.guild.members.cache.filter(m => m.user.bot).size;
    message.reply(`👥 Toplam: ${total} | Çevrimiçi: ${online} | Bot: ${bot}`);
  }
}; 