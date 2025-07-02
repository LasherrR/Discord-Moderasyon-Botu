module.exports = {
  name: "modleaderboard",
  description: "En aktif moderatörleri listeler",
  async execute(message) {
    message.client.modStats = message.client.modStats || {};
    const sorted = Object.entries(message.client.modStats)
      .sort((a, b) => ((b[1].ban || 0) + (b[1].mute || 0) + (b[1].warn || 0)) - ((a[1].ban || 0) + (a[1].mute || 0) + (a[1].warn || 0)))
      .slice(0, 10);
    if (!sorted.length) return message.reply('Hiç moderatör istatistiği yok!');
    const list = await Promise.all(sorted.map(async ([id, stats], i) => {
      const user = await message.guild.members.fetch(id).catch(() => null);
      return user ? `${i+1}. ${user.user.tag} - Ban: ${stats.ban}, Mute: ${stats.mute}, Warn: ${stats.warn}` : null;
    }));
    message.reply('🏆 En aktif moderatörler:\n' + list.filter(Boolean).join('\n'));
  }
}; 