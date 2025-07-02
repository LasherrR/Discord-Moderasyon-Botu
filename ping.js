module.exports = {
  name: "ping",
  description: "Bot gecikmesini gösterir",
  async execute(message) {
    const ping = Date.now() - message.createdTimestamp;
    message.reply(`🏓 Pong! Gecikme: ${ping}ms | API: ${Math.round(message.client.ws.ping)}ms`);
  }
}; 