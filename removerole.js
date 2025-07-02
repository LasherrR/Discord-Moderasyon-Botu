const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "removerole",
  description: "Kullanıcıdan rol kaldırır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageRoles)) return message.reply('Bu komutu kullanmak için `Rolleri Yönet` yetkisine sahip olmalısın.');
    const member = message.mentions.members.first();
    const role = message.mentions.roles.first();
    if (!member || !role) return message.reply('Kullanım: `!removerole @kullanıcı @rol`');
    await member.roles.remove(role);
    message.reply(`✅ ${member.user.tag} kullanıcısından ${role.name} rolü kaldırıldı!`);
  }
}; 