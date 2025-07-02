module.exports = {
  name: 'dashboard',
  description: 'Sunucu dashboard bilgilerini gösterir',
  async execute(message) {
    const guild = message.guild;
    const total = guild.memberCount;
    const online = guild.members.cache.filter(m => m.presence && m.presence.status !== 'offline').size;
    const bot = guild.members.cache.filter(m => m.user.bot).size;
    const kanal = guild.channels.cache.size;
    const rol = guild.roles.cache.size;
    message.reply(`📊 **Dashboard:**\n👥 Üye: ${total}\n🟢 Çevrimiçi: ${online}\n🤖 Bot: ${bot}\n📺 Kanal: ${kanal}\n🎭 Rol: ${rol}`);
  }
}; 