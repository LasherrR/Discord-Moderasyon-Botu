module.exports = {
  name: "uptime",
  description: "Bot çalışma süresi",
  async execute(message, args) {
    const uptime = process.uptime();
    const days = Math.floor(uptime / 86400);
    const hours = Math.floor(uptime / 3600) % 24;
    const minutes = Math.floor(uptime / 60) % 60;
    const seconds = Math.floor(uptime % 60);
    message.reply(`⏰ Bot çalışma süresi: ${days}g ${hours}s ${minutes}d ${seconds}s`);
  }
}; 