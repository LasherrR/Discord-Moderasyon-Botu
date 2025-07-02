module.exports = {
  name: "whois",
  description: "Kullanıcı hakkında bilgi gösterir",
  async execute(message, args) {
    const member = message.mentions.members.first() || message.member;
    message.reply(`👤 Kullanıcı: ${member.user.tag}\nID: ${member.id}\nHesap oluşturulma: ${member.user.createdAt.toLocaleDateString('tr-TR')}\nSunucuya katılım: ${member.joinedAt.toLocaleDateString('tr-TR')}`);
  }
}; 