// Bot Configuration
module.exports = {
    // Language Settings
    defaultLanguage: 'en',
    supportedLanguages: ['en', 'es', 'fr', 'si'],
    translations: {
        en: {
            welcome: "Welcome to Rome WhatsApp Bot!",
            unauthorized: "You are not authorized to use this command.",
            levelUp: "🎉 Congratulations! You've reached level {level}!"
        },
        es: {
            welcome: "¡Bienvenido a Rome WhatsApp Bot!",
            unauthorized: "No estás autorizado para usar este comando.",
            levelUp: "🎉 ¡Felicitaciones! ¡Has alcanzado el nivel {level}!"
        },
        fr: {
            welcome: "Bienvenue sur Rome WhatsApp Bot !",
            unauthorized: "Vous n'êtes pas autorisé à utiliser cette commande.",
            levelUp: "🎉 Félicitations ! Vous avez atteint le niveau {level} !"
        },
        si: {
            welcome: "Rome WhatsApp Bot වෙත සාදරයෙන් පිළිගනිමු!",
            unauthorized: "ඔබට මෙම විධානය භාවිතා කිරීමට අවසර නැත.",
            levelUp: "🎉 සුභ පැතුම්! ඔබ {level} මට්ටම කරා ළඟා වී ඇත!"
        }
    },

    // Auto-Reply Settings
    autoReply: {
        enabled: true,
        triggers: {
            "hello": "👋 Hello! How can I help you today?",
            "good morning": "🌅 Good morning! Have a great day!",
            "good night": "🌙 Good night! Sweet dreams!",
            "thank you": "🙏 You're welcome! Always here to help!",
            "help": "🤝 Need assistance? Type 'menu' to see all available commands!",
            "bye": "👋 Goodbye! Take care and see you soon!",
            "welcome": "🌟 Welcome to the group! Feel free to introduce yourself!"
        },
        greetingEnabled: true,
        greetingMessage: "👋 Hi {username}! Welcome to the group!"
    },

    // Message Filter Settings
    messageFilter: {
        enabled: true,
        spamProtection: true,
        maxMessagesPerMinute: 10,
        bannedWords: ["spam", "abuse", "scam", "hack", "crack", "nsfw", "18+"],
        warningMessage: "⚠️ Please avoid spamming or using inappropriate language."
    },

    // Leveling System
    levelSystem: {
        enabled: true,
        xpPerMessage: 10,
        xpPerImage: 20,
        xpPerVideo: 30,
        xpPerSticker: 15,
        xpPerVoice: 25,
        levelUpMultiplier: 2,
        levelUpAnnouncement: true,
        rewards: {
            5: "🎖️ Bronze Member",
            10: "🥈 Silver Member",
            15: "🥇 Gold Member",
            20: "💎 Diamond Member",
            25: "👑 Crown Member"
        }
    },

    // Scheduled Messages
    scheduledMessages: {
        enabled: true,
        messages: [
            {
                message: "🌟 Daily Reminder: Stay active and respectful!",
                schedule: "0 9 * * *",
                groups: ["all"]
            },
            {
                message: "🌙 Group is entering quiet hours. Please minimize chat.",
                schedule: "0 22 * * *",
                groups: ["all"]
            }
        ]
    },
    // Bot Settings
    privateMode: false,
    autoChangeDP: true,
    dpChangeInterval: 3600000, // 1 hour in milliseconds
    groupSettings: {
        welcomeMessage: true,
        antiLink: true,
        antiSpam: true,
        memberLimit: 257,
        adminOnly: false,
        autoRemove: true
    }

    // Display Pictures URLs
    displayPictures: [
        'https://i.ibb.co/rome/dp1.jpg',
        'https://i.ibb.co/rome/dp2.jpg',
        'https://i.ibb.co/rome/dp3.jpg'
    ],

    // Bot Information
    botInfo: {
        name: "🇵🇬⃞ᮼ⋤̱͟͟͞ʀ͟͞ꪮ̱̰ᷡ͟ᴍ̱ⷷ͟ᴇᷱ͟᳀͟͞⃝ꪮ̱̄͟͞ꜰ͟͞ꜰ͟ɪⷮ͟ᴄ͟ɪⷨ͟ᴀ̄͟͞ʟ͟͞⋥᭕🇵🇬⃞",
        developer: "Demo",
        version: "2.0.0"
    },

    // Command Settings
    commands: {
        menu: true,
        diss: true,
        family: true,
        rome: true
    },

    // Access Control
    adminNumbers: [
        '1234567890@c.us'
    ],

    // Customization
    customText: {
        welcome: "Welcome to Rome WhatsApp Bot!",
        unauthorized: "You are not authorized to use this command."
    },

    // Command Content
    dissText: `🦅⃞𝛭ᴇͥᴍͣʙͫᴇʀ⃞ᴼᶠ 𝚻͢ꫝꫀ⃤🇵🇬⃞ℜꤋᷡꮇͤꭼᷱ ⃯⃗ᭆ

█▀█ █▀▀ █▀▀ █ █▀▀ █ ▄▀█ █░░
█▄█ █▀░ █▀░ █ █▄▄ █ █▀█ █▄▄

◃🔱🅣𝙷𝙸𝙽𝙺 🅣𝚆𝙸𝙲𝙴 🅑𝙴𝙵𝙾𝚁𝙴 🅕𝙸𝙶𝙷𝚃 🅦𝙸𝚃𝙷 🅤𝚂🔱▹

꧁ꪶරෝ̶ꫂමෙ̶їꪶපු̶їꫂරා̶ꪶїවෘ̶ꫂїත̶්їꪶත̶ꫂїය̶ꪻ꧂
▱▱▱▱▱▱▱▱▱▱▱▱▱
🇵🇬⃞ᮼ⋤̱͟͟͞ʀ͟͞ꪮ̱̰ᷡ͟ᴍ̱ⷷ͟ᴇᷱ͟᳀͟͞⃝ꪮ̱̄͟͞ꜰ͟͞ꜰ͟ɪⷮ͟ᴄ͟ɪⷨ͟ᴀ̄͟͞ʟ͟͞⋥᭕🇵🇬⃞
▱▱▱▱▱▱▱▱▱▱▱▱
𝐒𝚰𝚴𝐂𝚵𐎈❷⓿➊➒𐏕❷⓿➋❺
➪⚠𝛮𝜊(✗)𝐂oᴘʏ,𝐒ᴘᴀᴍ❌
➪⚠𝜨𝜊(✗)𝐓ᴇᴀᴍ 𝐋ɪɴᴋs❗
➪⚠𝐘𝜖𝑺(✓)𝐂ʜᴀᴛ & 𝐕ɵɪcᴇ♨
➪⚠𝐑ᴇsᴘᴇcᴛ 𝜜ᴅᴍɪɴs & 𝐆ᴀᷳɴᷞɢᷘ💯
━━━━━━━━━ ꫟ ━━━━━━━━━
🥇❖𝐂𝚨𝚸𝚻𝚨𝚰𝚴𝐒☛⃟ ᶜᵖ
🥇⃞⃙🎓𝕽ꪮᴍᴇ 𝐃ᴏᴄᴀ™͢⚙
🥇⃞⃙🎓𝕽ꪮᴍᴇ ™͢⚙
🥇⃞⃙🎓𝕽ꪮᴍᴇ 𝐊ᴏᴄʜᴀ™͢⚙
🥇⃞⃙🎓𝕽ꪮᴍᴇ 𝐖.𝐃ᴇᴠɪʟ™͢⚙
▰▰▰▰▰▰▰▰▰▰▰▰
🥈❖Ꮴ.𝐶𝚨𝚸𝚻𝚨𝚰𝚴𝐒☛⃟ᵛᶜᵖ
🥈⃞⃙🎓𝕽ꪮᴍᴇ 𝐋.𝐑ᴀᴡᴀɴᴀ™͢⚙
🥈⃞⃙🎓𝕽ꪮᴍᴇ 𝐃ᴇᴍo™͢⚙
🥈⃞⃙🎓𝕽ꪮᴍᴇ 𝐔ᴅɪʏᴀ™͢⚙
🥈⃞⃙🎓𝕽ꪮᴍᴇ 𝐃ᴇsʜ™͢⚙
▰▰▰▰▰▰▰▰▰▰▰▰
🏅❖𝚯𝐖𝚴𝚵𝐑𝐒☛⃟
🕊⃞⃙🎓𝐏ꪮʟꪮ
🕊⃞⃙🎓𝐃ꪮᴄᴀ
🕊⃞⃙🎓𝐉ᴀɴɪʏᴀ
▰▱▰▱▰▱▰▱▰▱▰▱
🦅⃤𝛣ꭱᷢꪮͦꭲᷟꫝͤᴇ⃝ʀs 𝛪ɴ⃞ 𝛢ꭱꮇ͢ꭶ🇵🇬
▰▱▰▱▰▱▰▱▰▱▰▱
◄🇵🇬⃞⃗⚖අ̶ꪶᴸ̶ᵁ̶ත̶්ꫂ꫟රෝ̶ꪻᴹ̶𝚬ꫂ₂₀͠₁₉⚖⃞⃖🇵🇬►`,

    familyText: `🥇❖𝐂𝚨𝚸𝚻𝚨𝚰𝚴𝐒☛⃟ ᶜᵖ
🥇⃞⃙🎓𝕽ꪮᴍᴇ 𝐃ᴏᴄᴀ™͢⚙
🥇⃞⃙🎓𝕽ꪮᴍᴇ ™͢⚙
🥇⃞⃙🎓𝕽ꪮᴍᴇ 𝐊ᴏᴄʜᴀ™͢⚙
🥇⃞⃙🎓𝕽ꪮᴍᴇ 𝐖.𝐃ᴇᴠɪʟ™͢⚙
▰▰▰▰▰▰▰▰▰▰▰▰
🥈❖Ꮴ.𝐶𝚨𝚸𝚻𝚨𝚰𝚴𝐒☛⃟ᵛᶜᵖ
🥈⃞⃙🎓𝕽ꪮᴍᴇ 𝐋.𝐑ᴀᴡᴀɴᴀ™͢⚙
🥈⃞⃙🎓𝕽ꪮᴍᴇ 𝐃ᴇᴍo™͢⚙
🥈⃞⃙🎓𝕽ꪮᴍᴇ 𝐔ᴅɪʏᴀ™͢⚙
🥈⃞⃙🎓𝕽ꪮᴍᴇ 𝐃ᴇsʜ™͢⚙
▰▰▰▰▰▰▰▰▰▰▰▰
🏅❖𝚯𝐖𝚴𝚵𝐑𝐒☛⃟
🕊⃞⃙🎓𝐏ꪮʟꪮ
🕊⃞⃙🎓𝐃ꪮᴄᴀ
🕊⃞⃙🎓𝐉ᴀɴɪʏᴀ
▰▱▰▱▰▱▰▱▰▱▰▱
🦅⃤𝛣ꭱᷢꪮͦꭲᷟꫝͤᴇ⃝ʀs 𝛪ɴ⃞ 𝛢ꭱꮇ͢ꭶ🇵🇬
▰▱▰▱▰▱▰▱▰▱▰▱
◄🇵🇬⃞⃗⚖අ̶ꪶᴸ̶ᵁ̶ත̶්ꫂ꫟රෝ̶ꪻᴹ̶𝚬ꫂ₂₀͠₁₉⚖⃞⃖🇵🇬►`
}
};