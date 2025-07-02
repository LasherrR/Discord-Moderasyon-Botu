module.exports = {
  name: "davet-takip",
  description: "Kullanıcının davet sayısını gösterir",
  async execute(message, args) {
    const member = message.mentions.members.first() || message.member;
    message.client.davetSayisi = message.client.davetSayisi || {};
    const davet = message.client.davetSayisi[member.id] || 0;
    message.reply(`📨 ${member.user.tag} kullanıcısının davet sayısı: **${davet}**`);
  }
}; 