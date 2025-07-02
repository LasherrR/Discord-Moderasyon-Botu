module.exports = {
  name: "modstat",
  description: "Moderatörün istatistiklerini gösterir",
  async execute(message, args) {
    const member = message.mentions.members.first() || message.member;
    message.client.modStats = message.client.modStats || {};
    const stats = message.client.modStats[member.id] || { ban: 0, mute: 0, warn: 0 };
    message.reply(`👮 ${member.user.tag} - Ban: ${stats.ban}, Mute: ${stats.mute}, Warn: ${stats.warn}`);
  }
}; 