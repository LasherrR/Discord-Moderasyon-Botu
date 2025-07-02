module.exports = {
  name: "mutelist",
  description: "Susturulan kullanıcıları listeler",
  async execute(message) {
    const muteRole = message.guild.roles.cache.find(r => r.name.toLowerCase().includes('mute'));
    if (!muteRole) return message.reply('Mute rolü bulunamadı!');
    const muted = message.guild.members.cache.filter(m => m.roles.cache.has(muteRole.id));
    if (!muted.size) return message.reply('Sunucuda susturulan kullanıcı yok!');
    const list = muted.map(m => m.user.tag).join(', ');
    message.reply(`🔇 **Susturulan Kullanıcılar:**\n${list}`);
  }
}; 