const Command = require('../../structures/Command')

module.exports = class extends Command {
    constructor(client, options) {
        super(client, {
            name: 'ping',
            description: 'Latência do bot.'
        })
    }

    run = (interaction) => {
        interaction.reply({
            content: `Latência do bot: \`${this.client.ws.ping}\``,
            ephemeral: true
        })
    }
}