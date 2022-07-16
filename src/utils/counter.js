const { MessageActionRow, MessageButton } = require('discord.js')
const Command = require('../../structures/Command')

const actionRow = new MessageActionRow()
    .addComponents([
        new MessageButton().setStyle('SUCCESS').setLabel('+1').setCustomId('ADICIONAR'),
        new MessageButton().setStyle('DANGER').setLabel('Zerar').setCustomId('ZERAR'),
        new MessageButton().setStyle('PRIMARY').setLabel('-1').setCustomId('REMOVER')
    ])

module.exports = class extends Command {
    constructor(client, options) {
        super(client, {
            name: 'contador',
            description: 'Inicie um contador no canal.'
        })
    }

    run = async (interaction) => {
        let contagem = 0

        const reply = await interaction.reply({
            content: `Contagem iniciada em: \`${contagem}\``,
            components: [actionRow],
            fetchReply: true
        })

        const filter = (b) => b.user.id === interaction.user.id
        const collect = reply.createMessageComponentCollector({ filter })

        collect.on('collect', (i) => {
            switch (i.customId) {
                case 'ADICIONAR' :
                    contagem++
                    break;
                case 'REMOVER' :
                    contagem--
                    break;
                case 'ZERAR' :
                    contagem = 0
                    break;
            }

            i.update({
                content: `Contagem atualizada em: \`${contagem}\``
            })
        })
    }
}