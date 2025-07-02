module.exports = {
  name: "risk-analiz",
  description: "Kullanıcının risk analizini gösterir",
  async execute(message, args) {
    const member = message.mentions.members.first() || message.member;
    // Basit örnek: risk puanı hafızada tutuluyor
    message.client.risk = message.client.risk || {};
    const puan = message.client.risk[member.id] || 0;
    message.reply(`⚠️ ${member.user.tag} risk puanı: **${puan}**`);
  }
}; 