module.exports = {
  name: "history",
  description: "Kullanıcının ceza geçmişini gösterir",
  async execute(message, args) {
    const member = message.mentions.members.first() || message.member;
    message.client.cezaGecmisi = message.client.cezaGecmisi || {};
    const gecmis = message.client.cezaGecmisi[member.id] || [];
    if (!gecmis.length) return message.reply('Kullanıcının ceza geçmişi yok!');
    const list = gecmis.map((c, i) => `${i+1}. ${c}`).join('\n');
    message.reply(`📜 ${member.user.tag} ceza geçmişi:\n${list}`);
  }
}; 