const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "addrole",
  description: "Kullanıcıya rol ekler",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageRoles)) return message.reply('Bu komutu kullanmak için `Rolleri Yönet` yetkisine sahip olmalısın.');
    const member = message.mentions.members.first();
    const role = message.mentions.roles.first();
    if (!member || !role) return message.reply('Kullanım: `!addrole @kullanıcı @rol`');
    await member.roles.add(role);
    message.reply(`✅ ${member.user.tag} kullanıcısına ${role.name} rolü eklendi!`);
  }
}; 