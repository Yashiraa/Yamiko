require('dotenv').config()

const Client = require('./src/structures/Client')
const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGE_REACTIONS',
        'GUILD_MESSAGES',
        'GUILD_INVITES',
        'GUILD_VOICE_STATES',
        'GUILD_MEMBERS',
        'GUILD_PRESENCES'
    ]
})

// Crie um arquivo .env ou coloque o Token do seu bot logo abaixo. (PT-BR)
// Create an .env file or place your bot's Token below. (EN)

client.login(process.env.TOKEN)
