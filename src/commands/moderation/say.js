const Command = require('../../structures/Command')

module.exports = class extends Command {
    constructor(client, options) {
        super(client, {
            name: 'say',
            description: 'Mande uma mensagem em algum canal.',
            options: [
                {
                    name: 'canal',
                    type: 'CHANNEL',
                    description: 'Canal onde a mensagem será enviada.',
                    required: true
                },
                {
                    name: 'mensagem',
                    type: 'STRING',
                    description: 'A mensagem que será enviada ao canal.',
                    required: true
                }
            ]
        })
    }

    run = (interaction) => {
        const canal = interaction.options.getChannel('canal')
        const mensagem = interaction.options.getString('mensagem')

        if(!'GUILD_TEXT', 'GUILD_ANNOUCEMENTS'.includes(canal.type)) return interaction.reply({ content: `ERROR | Informe um canal de texto ou de anúncio.`, ephemeral: true })

        canal.send({ content: mensagem }).then(() => interaction.reply({
            content: `A mensagem foi enviada no canal <#${canal.id}>`,
            ephemeral: true
        }))
    }
}