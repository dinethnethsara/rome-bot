// Text Styles and Decorations Configuration
module.exports = {
    // Advanced Text Styles
    textStyles: {
        medieval: (text) => `⚔️${text.split('').map(c => `${c}҈`).join('')}⚔️`,
        circuit: (text) => `⚡${text.split('').join('⚡')}⚡`,
        pixel: (text) => text.split('').map(c => `${c}｜`).join(''),
        wave: (text) => text.split('').map(c => `${c}᷈`).join(''),
        brush: (text) => text.split('').map(c => `${c}̾`).join(''),
        glitch: (text) => text.split('').map(c => `${c}҉`).join(''),
        shadow: (text) => text.split('').map(c => `${c}̷`).join(''),
        mirror: (text) => `${text}||${[...text].reverse().join('')}`,
        crystal: (text) => `💎${text.split('').join('✧')}💎`,
        rainbow: (text) => text.split('').map((c, i) => `${['🔴', '🟡', '🟢', '🔵', '🟣'][i % 5]}${c}`).join('')
    },

    // Emoji Sets
    emojiSets: {
        nature: ['🌸', '🌺', '🌹', '🌷', '🌻', '🌼', '🍀', '🌿', '🌱', '🌲'],
        hearts: ['❤️', '💖', '💗', '💓', '💝', '💘', '💕', '💞', '💟', '♥️'],
        stars: ['⭐', '✨', '💫', '🌟', '✡️', '⚡', '💥', '🔯', '✴️', '🌠'],
        faces: ['😊', '😄', '😃', '😀', '😋', '😎', '🥰', '😍', '🤩', '☺️'],
        animals: ['🦁', '🐯', '🐶', '🐱', '🦊', '🐼', '🐨', '🐮', '🐷', '🐸'],
        magic: ['🔮', '✨', '🌈', '🎭', '🎪', '🎨', '🎯', '🎲', '🎮', '🎸']
    },

    // Decorative Borders
    borders: {
        simple: ['─', '│', '┌', '┐', '└', '┘'],
        double: ['═', '║', '╔', '╗', '╚', '╝'],
        rounded: ['─', '│', '╭', '╮', '╰', '╯'],
        fancy: ['═', '║', '✿', '✿', '✿', '✿'],
        stars: ['⋆', '⋆', '★', '★', '★', '★']
    },

    // Message Decorations
    messageDecorations: {
        announcement: (text) => `📢 ═══ ANNOUNCEMENT ═══ 📢\n${text}\n═════════════════════`,
        warning: (text) => `⚠️ !WARNING! ⚠️\n${text}\n⚠️ !WARNING! ⚠️`,
        important: (text) => `🔴 IMPORTANT 🔴\n${text}\n🔴 IMPORTANT 🔴`,
        celebration: (text) => `🎉 ${text} 🎉`,
        quote: (text) => `❝ ${text} ❞`
    },

    // Group Welcome Templates
    welcomeTemplates: [
        '🌟 Welcome {username} to our amazing group! 🌟',
        '✨ Hey {username}! Great to have you here! ✨',
        '🎉 A warm welcome to {username}! Let's celebrate! 🎉',
        '💫 Welcome aboard {username}! Ready for an adventure? 💫',
        '🌈 {username} has joined! Let's make memories together! 🌈'
    ],

    // Group Leave Messages
    leaveMessages: [
        '👋 Farewell {username}! Hope to see you again!',
        '😢 {username} has left the group. Take care!',
        '✈️ Safe travels {username}! You'll be missed!',
        '🌊 {username} has sailed away. Until next time!',
        '🍃 {username} has left. The journey continues!'
    ],

    // Group Rules Template
    groupRulesTemplate: [
        '📜 GROUP RULES 📜',
        '1. Be respectful to all members',
        '2. No spam or inappropriate content',
        '3. No sharing of illegal content',
        '4. Keep discussions friendly and constructive',
        '5. Follow admins' instructions',
        '6. No advertising without permission',
        '7. Use appropriate language',
        '8. Respect everyone's privacy',
        '9. Have fun and enjoy the community!',
        '📌 Breaking these rules may result in removal'
    ].join('\n'),

    // Custom Commands Help Template
    commandHelpTemplate: (command, description) => `
    📍 Command: ${command}
    📝 Description: ${description}
    `,

    // Level Up Animations
    levelUpAnimations: [
        '🌟 ==== LEVEL UP! ==== 🌟',
        '⭐ ~~~~ LEVEL UP! ~~~~ ⭐',
        '✨ ⚡ LEVEL UP! ⚡ ✨',
        '🎉 **** LEVEL UP! **** 🎉',
        '💫 ⚔️ LEVEL UP! ⚔️ 💫'
    ]
};