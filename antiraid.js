const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "antiraid",
  description: "Raid korumasını açar/kapatır",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.Administrator)) return message.reply('Bu komutu kullanmak için `Yönetici` olmalısın.');
    const subcmd = args[0];
    if (!subcmd || !['aç', 'kapat'].includes(subcmd)) return message.reply('Kullanım: `!antiraid aç` veya `!antiraid kapat`');
    message.client.antiRaid = message.client.antiRaid || {};
    message.client.antiRaid[message.guild.id] = subcmd === 'aç';
    message.reply(`🛡️ Raid koruması **${subcmd === 'aç' ? 'aktif' : 'devre dışı'}**!`);
  }
};

// index.js dosyasına eklenmeli:
// client.on('guildMemberAdd', ...) ile bot girişleri engellenir. 