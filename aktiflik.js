module.exports = {
  name: "aktiflik",
  description: "Kullanıcının aktiflik puanını gösterir",
  async execute(message, args) {
    const member = message.mentions.members.first() || message.member;
    message.client.aktiflik = message.client.aktiflik || {};
    const puan = message.client.aktiflik[member.id] || 0;
    message.reply(`💡 ${member.user.tag} aktiflik puanı: **${puan}**`);
  }
}; 