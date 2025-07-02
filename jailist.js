module.exports = {
  name: "jailist",
  description: "Jaildeki kullanıcıları listeler",
  async execute(message) {
    const jailRole = message.guild.roles.cache.find(r => r.name.toLowerCase().includes('jail'));
    if (!jailRole) return message.reply('Jail rolü bulunamadı!');
    const jailed = message.guild.members.cache.filter(m => m.roles.cache.has(jailRole.id));
    if (!jailed.size) return message.reply('Sunucuda jailde kullanıcı yok!');
    const list = jailed.map(m => m.user.tag).join(', ');
    message.reply(`🔒 Jaildeki kullanıcılar: ${list}`);
  }
}; 