module.exports = {
  name: "cezapuan",
  description: "Kullanıcının ceza puanını gösterir",
  async execute(message, args) {
    const member = message.mentions.members.first() || message.member;
    // Basit örnek: puanlar hafızada tutuluyor
    message.client.puanlar = message.client.puanlar || {};
    const puan = message.client.puanlar[member.id] || 0;
    message.reply(`📊 ${member.user.tag} kullanıcısının ceza puanı: **${puan}**`);
  }
}; 