module.exports = {
  name: "channelinfo",
  description: "Kanal hakkında bilgi gösterir",
  async execute(message) {
    const channel = message.mentions.channels.first() || message.channel;
    message.reply(`📺 Kanal: ${channel.name}\nID: ${channel.id}\nTür: ${channel.type}\nOluşturulma: ${channel.createdAt.toLocaleDateString('tr-TR')}`);
  }
}; 