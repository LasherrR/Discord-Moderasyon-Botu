const { PermissionFlagsBits } = require('discord.js');

module.exports = {
  name: "nuke",
  description: "Kanalı tamamen temizler",
  async execute(message, args) {
    if (!message.member.permissions.has(PermissionFlagsBits.ManageChannels)) return message.reply('Bu komutu kullanmak için `Kanalları Yönet` yetkisine sahip olmalısın.');
    const channel = message.channel;
    const position = channel.position;
    const newChannel = await channel.clone();
    await channel.delete();
    await newChannel.setPosition(position);
    newChannel.send('💥 Kanal nuke edildi!');
  }
}; 