module.exports = {
  name: "avatar",
  description: "Kullanıcının avatarını gösterir",
  async execute(message, args) {
    const member = message.mentions.members.first() || message.member;
    message.reply(`${member.user.displayAvatarURL({ size: 1024, dynamic: true })}`);
  }
}; 