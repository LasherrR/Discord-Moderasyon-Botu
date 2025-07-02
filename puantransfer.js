module.exports = {
  name: "puantransfer",
  description: "Bir kullanıcıya ceza puanı transfer eder",
  async execute(message, args) {
    const member = message.mentions.members.first();
    const miktar = parseInt(args[1]);
    if (!member || isNaN(miktar)) return message.reply('Kullanım: `!puantransfer @kullanıcı miktar`');
    message.client.puanlar = message.client.puanlar || {};
    message.client.puanlar[member.id] = (message.client.puanlar[member.id] || 0) + miktar;
    message.reply(`✅ ${member.user.tag} kullanıcısına **${miktar}** ceza puanı eklendi!`);
  }
}; 