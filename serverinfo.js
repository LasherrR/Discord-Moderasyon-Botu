module.exports = {
  name: "serverinfo",
  description: "Sunucu hakkında bilgi gösterir",
  async execute(message) {
    const guild = message.guild;
    const owner = await guild.fetchOwner();
    const created = guild.createdAt.toLocaleDateString('tr-TR');
    message.reply(`🏠 Sunucu: ${guild.name}\nKurucu: ${owner.user.tag}\nKuruluş: ${created}\nÜye: ${guild.memberCount}`);
  }
}; 