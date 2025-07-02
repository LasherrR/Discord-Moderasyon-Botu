module.exports = {
    name: 'sunucu-bilgi',
    description: 'Sunucu hakkında detaylı bilgi gösterir',
    async execute(message) {
        const guild = message.guild;
        const owner = await guild.fetchOwner();
        const created = guild.createdAt.toLocaleDateString('tr-TR');
        const kanal = guild.channels.cache.size;
        const rol = guild.roles.cache.size;
        message.reply(`🏠 Sunucu: ${guild.name}\nKurucu: ${owner.user.tag}\nKuruluş: ${created}\nÜye: ${guild.memberCount}\nKanal: ${kanal}\nRol: ${rol}`);
    }
}; 