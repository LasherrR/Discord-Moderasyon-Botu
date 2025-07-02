module.exports = {
  name: "guvenlik-analiz",
  description: "Sunucu güvenlik analizi",
  async execute(message) {
    const guild = message.guild;
    const owner = guild.owner;
    const bots = guild.members.cache.filter(m => m.user.bot).size;
    const roles = guild.roles.cache.size;
    const channels = guild.channels.cache.size;
    const created = guild.createdAt.toLocaleDateString('tr-TR');
    message.reply(`🛡️ **Güvenlik Analizi:**\n👑 Kurucu: ${owner.user.tag}\n🤖 Bot: ${bots}\n🎭 Rol: ${roles}\n📺 Kanal: ${channels}\n📅 Kuruluş: ${created}`);
  }
}; 