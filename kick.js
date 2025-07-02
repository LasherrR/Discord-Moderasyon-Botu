const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "kick",
  description: "Kullanıcıyı sunucudan atar",
  async execute(message, args, client) {
    if (!message.member.permissions.has(PermissionFlagsBits.KickMembers)) return message.reply('Bu komutu kullanmak için `Üyeleri At` yetkisine sahip olmalısın.');
    client.settings = client.settings || {};
    const subcmd = args[0];
    if (subcmd === 'log') {
      const kanal = message.mentions.channels.first();
      if (!kanal) return message.reply('Bir kanal etiketle!');
      client.settings.kickLog = kanal.id;
      message.channel.send(`Kick log kanalı <#${kanal.id}> olarak ayarlandı.`);
    } else {
      const member = message.mentions.members.first();
      if (!member) return message.reply('Bir kullanıcı etiketle!');
      const reason = args.slice(1).join(' ') || 'Sebep belirtilmedi';
      if (!member.kickable) return message.reply('Bu kullanıcıyı atamıyorum!');
      await member.kick(reason);
      message.reply(`👢 ${member.user.tag} sunucudan atıldı! Sebep: ${reason}`);
      if (client.settings?.kickLog) {
        const logChannel = message.guild.channels.cache.get(client.settings.kickLog);
        if (logChannel) logChannel.send(`${member.user.tag} atıldı. Sebep: ${reason}`);
      }
    }
  }
}; 