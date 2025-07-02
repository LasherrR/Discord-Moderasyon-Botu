module.exports = {
  name: "guvenlikanaliz",
  description: "Kullanıcının güvenlik analizini gösterir",
  async execute(message, args) {
    const member = message.mentions.members.first() || message.member;
    // Basit örnek: güvenlik puanı hafızada tutuluyor
    message.client.guvenlik = message.client.guvenlik || {};
    const puan = message.client.guvenlik[member.id] || 0;
    message.reply(`🛡️ ${member.user.tag} güvenlik puanı: **${puan}**`);
  }
}; 