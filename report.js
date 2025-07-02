module.exports = {
  name: "report",
  description: "Kullanıcıyı rapor eder",
  async execute(message, args) {
    const member = message.mentions.members.first();
    const reason = args.slice(1).join(' ');
    if (!member || !reason) return message.reply('Kullanım: `!report @kullanıcı sebep`');
    message.reply(`🚨 ${member.user.tag} kullanıcısı rapor edildi! Sebep: ${reason}`);
  }
}; 