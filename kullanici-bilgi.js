module.exports = {
    name: 'kullanici-bilgi',
    description: 'Kullanıcı hakkında detaylı bilgi gösterir',
    async execute(message, args) {
        const member = message.mentions.members.first() || message.member;
        const roles = member.roles.cache.map(r => r.name).join(', ');
        message.reply(`👤 Kullanıcı: ${member.user.tag}\nID: ${member.id}\nHesap: ${member.user.createdAt.toLocaleDateString('tr-TR')}\nKatılım: ${member.joinedAt.toLocaleDateString('tr-TR')}\nRoller: ${roles}`);
    }
}; 