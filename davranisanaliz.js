module.exports = {
  name: "davranisanaliz",
  description: "Kullanıcının davranış analizini gösterir",
  async execute(message, args) {
    const member = message.mentions.members.first() || message.member;
    // Basit örnek: davranış puanı hafızada tutuluyor
    message.client.davranis = message.client.davranis || {};
    const puan = message.client.davranis[member.id] || 0;
    message.reply(`🧠 ${member.user.tag} davranış puanı: **${puan}**`);
  }
}; 