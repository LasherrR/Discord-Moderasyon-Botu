module.exports = {
  name: "haftalikrapor",
  description: "Haftalık sunucu raporu gösterir",
  async execute(message) {
    const total = message.guild.memberCount;
    const online = message.guild.members.cache.filter(m => m.presence && m.presence.status !== 'offline').size;
    message.reply(`📊 **Haftalık Rapor:**\nToplam üye: ${total}\nÇevrimiçi: ${online}\nAktiflik oranı: %${Math.round((online/total)*100)}`);
  }
}; 