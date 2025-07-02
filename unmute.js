const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "unmute",
  description: "Kullanıcının susturmasını kaldırır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.MuteMembers)) return message.reply('Bu komutu kullanmak için `Üyeleri Sustur` yetkisine sahip olmalısın.');
    const member = message.mentions.members.first();
    if (!member) return message.reply('Bir kullanıcı etiketle!');
    const muteRole = message.guild.roles.cache.find(r => r.name.toLowerCase().includes('mute'));
    if (!muteRole) return message.reply('Mute rolü bulunamadı!');
    await member.roles.remove(muteRole);
    message.reply(`🔊 ${member.user.tag} susturması kaldırıldı!`);
  }
}; 