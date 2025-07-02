const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "createrole",
  description: "Yeni rol oluşturur",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageRoles)) return message.reply('Bu komutu kullanmak için `Rolleri Yönet` yetkisine sahip olmalısın.');
    const name = args.join(' ');
    if (!name) return message.reply('Rol adını belirt!');
    const role = await message.guild.roles.create({ name });
    message.reply(`✅ ${role.name} rolü oluşturuldu!`);
  }
}; 