module.exports = {
  name: "voiceaktiflik",
  description: "Kullanıcının sesli aktiflik süresini gösterir",
  async execute(message, args) {
    const member = message.mentions.members.first() || message.member;
    message.client.voiceAktiflik = message.client.voiceAktiflik || {};
    const sure = message.client.voiceAktiflik[member.id] || 0;
    message.reply(`🎤 ${member.user.tag} toplam sesli aktiflik: **${sure} dakika**`);
  }
}; 