module.exports = {
  name: "roleinfo",
  description: "Rol hakkında bilgi gösterir",
  async execute(message) {
    const role = message.mentions.roles.first();
    if (!role) return message.reply('Bir rol etiketle!');
    message.reply(`🎭 Rol: ${role.name}\nID: ${role.id}\nÜye: ${role.members.size}\nRenk: ${role.hexColor}`);
  }
}; 