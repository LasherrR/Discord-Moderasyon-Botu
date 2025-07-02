const warns = new Map();

module.exports = {
  name: "warnings",
  description: "Kullanıcının uyarılarını listeler",
  async execute(message, args) {
    const member = message.mentions.members.first() || message.member;
    message.client.uyarilar = message.client.uyarilar || {};
    const uyarilar = message.client.uyarilar[member.id] || [];
    if (!uyarilar.length) return message.reply('Bu kullanıcının hiç uyarısı yok!');
    const list = uyarilar.map((u, i) => `${i+1}. ${u}`).join('\n');
    message.reply(`⚠️ ${member.user.tag} uyarıları:\n${list}`);
  }
}; 