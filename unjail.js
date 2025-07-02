const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "unjail",
  description: "Kullanıcıyı hapisten çıkarır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageRoles)) return message.reply('Bu komutu kullanmak için `Rolleri Yönet` yetkisine sahip olmalısın.');
    const member = message.mentions.members.first();
    if (!member) return message.reply('Bir kullanıcı etiketle!');
    const jailRole = message.guild.roles.cache.find(r => r.name.toLowerCase().includes('jail'));
    if (!jailRole) return message.reply('Jail rolü bulunamadı!');
    await member.roles.remove(jailRole);
    message.reply(`🔓 ${member.user.tag} hapisten çıkarıldı!`);
  }
}; 