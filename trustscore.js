module.exports = {
  name: "trustscore",
  description: "Kullanıcının güven puanını gösterir",
  async execute(message, args) {
    const member = message.mentions.members.first() || message.member;
    // Basit örnek: güven puanı hafızada tutuluyor
    message.client.trust = message.client.trust || {};
    const puan = message.client.trust[member.id] || 0;
    message.reply(`🔰 ${member.user.tag} güven puanı: **${puan}**`);
  }
}; 