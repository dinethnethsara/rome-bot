const { Client, LocalAuth, NoAuth } = require('whatsapp-web.js');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Function to generate a random pairing code
const generatePairCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
};

// Create a new WhatsApp client
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox']
    }
});

// Function to change display picture
async function changeDisplayPicture() {
    const config = require('./config.js');
    if (!config.autoChangeDP) return;

    try {
        const randomDP = config.displayPictures[Math.floor(Math.random() * config.displayPictures.length)];
        const response = await axios.get(randomDP, { responseType: 'arraybuffer' });
        await client.setProfilePicture(Buffer.from(response.data));
        console.log('Display picture changed successfully');
    } catch (error) {
        console.error('Failed to change display picture:', error);
    }
}

// Handle pairing code generation
client.on('ready', async () => {
    try {
        const code = await client.requestPairingCode();
        console.log('Your pairing code:', code);
    } catch (error) {
        console.error('Failed to generate pairing code:', error);
    }
});

// Handle client ready event
client.on('ready', () => {
    console.log('Client is ready!');
    // Start display picture change interval
    const config = require('./config.js');
    if (config.autoChangeDP) {
        setInterval(changeDisplayPicture, config.dpChangeInterval);
    }
});

// Function to generate random emojis from a set
const getRandomEmojis = (count) => {
    const emojis = ['🌟', '✨', '💫', '🎀', '🌈', '💝', '💖', '💕', '🌺', '🌸', '🍀', '🎵', '🎨', '🌙', '⭐'];
    return Array.from({length: count}, () => emojis[Math.floor(Math.random() * emojis.length)]);
};

// Function to create fancy text styles
const getFancyText = (text) => {
    const styles = {
        bubbles: text.split('').map(c => c + '⃝').join(''),
        squares: text.split('').map(c => c + '️⃞').join(''),
        hearts: `♥️${text}♥️`,
        sparkles: text.split('').join('✧'),
        waves: `〜${text}〜`,
        dots: `•${text.split('').join('•')}•`,
        stars: `★${text}★`,
        flowers: `🌸${text.split('').join('🌺')}🌸`,
        royal: `👑${text}👑`,
        neon: `⟨${text}⟩`,
        magic: `✮${text.split('').map(c => `${c}࿐`).join('')}✮`,
        cloud: `☁️${text}☁️`,
        circle: `○${text}○`,
        box: `[${text}]`,
        fire: `🔥${text}🔥`,
        rainbow: text.split('').map((c, i) => `${['🔴', '🟡', '🟢', '🔵', '🟣'][i % 5]}${c}`).join(''),
        crystal: `💎${text.split('').join('✧')}💎`,
        glitch: text.split('').map(c => `${c}҉`).join(''),
        shadow: text.split('').map(c => `${c}̷`).join(''),
        mirror: `${text}||${[...text].reverse().join('')}`,
        circuit: `⚡${text.split('').join('⚡')}⚡`,
        medieval: `⚔️${text.split('').map(c => `${c}҈`).join('')}⚔️`,
        pixel: text.split('').map(c => `${c}｜`).join(''),
        wave: text.split('').map(c => `${c}᷈`).join(''),
        brush: text.split('').map(c => `${c}̾`).join('')
    };
    return styles;
};

// Bot information
const BOT_INFO = {
    name: "🇵🇬⃞ᮼ⋤̱͟͟͞ʀ͟͞ꪮ̱̰ᷡ͟ᴍ̱ⷷ͟ᴇᷱ͟᳀͟͞⃝ꪮ̱̄͟͞ꜰ͟͞ꜰ͟ɪⷮ͟ᴄ͟ɪⷨ͟ᴀ̄͟͞ʟ͟͞⋥᭕🇵🇬⃞",
    developer: "DEMO",
    version: "2.0.0"
};

// Add the bot name/header
const BOT_NAME = `🦅⃞𝛭ᴇͥᴍͣʙͫᴇʀ⃞ᴼᶠ 𝚻͢ꫝꫀ⃤🇵🇬⃞ℜꤋᷡꮇͤꭼᷱ ⃯⃗ᭆ`;

// Add the full text content for .diss command
const DISS_TEXT = `█▀█ █▀▀ █▀▀ █ █▀▀ █ ▄▀█ █░░
█▄█ █▀░ █▀░ █ █▄▄ █ █▀█ █▄▄

◃🔱🅣𝙷𝙸𝙽𝙺 🅣𝚆𝙸𝙲𝙴 🅑𝙴𝙵𝙾𝚁𝙴 🅕𝙸𝙶𝙷𝚃 🅦𝙸𝚃𝙷 🅤𝚂🔱▹
// ... rest of the diss text content ...`;

// Add the family text content
const FAMILY_TEXT = `// ... family text content ...`;

// User data storage (in-memory for demonstration)
const userLevels = new Map();

// Function to handle user leveling
const handleUserLeveling = async (message) => {
    const userId = message.from;
    const userData = userLevels.get(userId) || { xp: 0, level: 1 };
    const config = require('./config.js');

    // Add XP based on message type
    if (message.hasMedia) {
        userData.xp += message.type === 'image' ? config.levelSystem.xpPerImage : config.levelSystem.xpPerVideo;
    } else {
        userData.xp += config.levelSystem.xpPerMessage;
    }

    // Check for level up
    const newLevel = Math.floor(Math.sqrt(userData.xp / config.levelSystem.levelUpMultiplier));
    if (newLevel > userData.level) {
        userData.level = newLevel;
        if (config.levelSystem.levelUpAnnouncement) {
            const levelUpMessage = config.translations[config.defaultLanguage].levelUp.replace('{level}', newLevel);
            await message.reply(levelUpMessage);
        }
    }

    userLevels.set(userId, userData);
};

// Function to check message spam
const isSpam = (message) => {
    const config = require('./config.js');
    if (!config.messageFilter.enabled) return false;

    // Check for banned words
    const containsBannedWord = config.messageFilter.bannedWords.some(word =>
        message.body.toLowerCase().includes(word)
    );

    return containsBannedWord;
};

// Function to handle auto-replies
const handleAutoReply = async (message) => {
    const config = require('./config.js');
    if (!config.autoReply.enabled) return;

    const content = message.body.toLowerCase();
    const triggers = config.autoReply.triggers;

    for (const [trigger, response] of Object.entries(triggers)) {
        if (content.includes(trigger)) {
            await message.reply(response);
            return;
        }
    }
};

// Function to handle group events
client.on('group-join', async (notification) => {
    const config = require('./config.js');
    if (!config.groupSettings.welcomeMessage) return;

    const chat = await notification.getChat();
    const contact = await notification.getContact();
    const welcomeMsg = config.autoReply.greetingMessage.replace('{username}', contact.pushname || 'Member');
    await chat.sendMessage(welcomeMsg);
});

// Function to handle group management
const handleGroupManagement = async (message) => {
    const config = require('./config.js');
    const chat = await message.getChat();

    if (chat.isGroup) {
        // Anti-link protection
        if (config.groupSettings.antiLink && message.body.match(/(https?:\/\/[^\s]+)/g)) {
            if (!chat.participants.find(p => p.id._serialized === message.author && p.isAdmin)) {
                await message.reply('⚠️ Links are not allowed in this group!');
                return true;
            }
        }

        // Member limit check
        if (config.groupSettings.memberLimit && chat.participants.length > config.groupSettings.memberLimit) {
            await message.reply(`⚠️ Group has reached the maximum member limit of ${config.groupSettings.memberLimit}!`);
            return true;
        }

        // Admin only mode
        if (config.groupSettings.adminOnly && !chat.participants.find(p => p.id._serialized === message.author && p.isAdmin)) {
            await message.reply('⚠️ Only admins can send messages in this group right now!');
            return true;
        }
    }
    return false;
};

// Handle message events
client.on('message', async (message) => {
    const config = require('./config.js');
    const styles = require('./styles.js');

    // Handle user leveling
    if (config.levelSystem.enabled) {
        await handleUserLeveling(message);
    }

    // Check for spam
    if (isSpam(message)) {
        await message.reply(config.messageFilter.warningMessage);
        return;
    }

    // Handle auto-replies
    await handleAutoReply(message);

    // Handle group management
    if (await handleGroupManagement(message)) {
        return;
    }

    // Handle menu command
    if (content === 'menu' || content === 'help') {
        const menuText = `*${BOT_INFO.name}*

🎮 *Commands Menu* 🎮

🔰 *.menu* - Show this menu
🔰 *.diss* - Display ROME official text
🔰 *.family* - Show ROME family members
🔰 *.style <text>* - Create fancy text styles
🔰 *.level* - Check your current level
🔰 *.rewards* - View level rewards

📱 *Group Features* 📱

⚡ Anti-Link Protection
⚡ Spam Detection
⚡ Level System
⚡ Auto-Replies
⚡ Welcome Messages
⚡ Scheduled Reminders

🎨 *Text Styles* 🎨

✨ Bubbles
✨ Squares
✨ Hearts
✨ Sparkles
✨ Rainbow
✨ Crystal
✨ Medieval
✨ Circuit
✨ And many more!

${BOT_INFO.name}
Version: ${BOT_INFO.version}
Developer: ${BOT_INFO.developer}

▰▱▰▱▰▱▰▱▰▱▰▱

` +
            `*Basic Commands:*\n` +
            `➤ menu - Show this menu\n` +
            `➤ alive - Check bot status\n\n` +
            `*Name Decoration Commands:*\n` +
            `➤ rome [name] - Basic decoration\n` +
            `➤ rome fancy [name] - Fancy styles\n` +
            `➤ rome rainbow [name] - Rainbow style\n` +
            `➤ rome mega [name] - Mega decoration\n\n` +
            `*Bot Information:*\n` +
            `Developer: ${BOT_INFO.developer}\n` +
            `Version: ${BOT_INFO.version}\n\n` +
            `Thank you for using ${BOT_INFO.name}! 🌟`;
        
        await message.reply(menuText);
        return;
    }

    // Handle alive command
    if (content === 'alive') {
        const aliveMessage = `*${BOT_INFO.name} Status* 🟢\n\n` +
            `Bot is up and running!\n\n` +
            `*System Info:*\n` +
            `➤ Status: Active\n` +
            `➤ Version: ${BOT_INFO.version}\n` +
            `➤ Developer: ${BOT_INFO.developer}\n\n` +
            `Type 'menu' to see available commands! ✨`;
        
        await message.reply(aliveMessage);
        return;
    }

    // Check if message starts with 'rome'
    if (content.startsWith('rome')) {
        const name = content.slice(4).trim(); // Remove 'rome' and trim whitespace
        
        if (!name) {
            const demoNames = ['John', 'Alice', 'Bob', 'Emma', 'Alex'];
            const demoName = demoNames[Math.floor(Math.random() * demoNames.length)];
            const demoMessage = `Try these commands:\n\n` +
                `rome ${demoName} - For basic decoration\n` +
                `rome fancy ${demoName} - For fancy styles\n` +
                `rome rainbow ${demoName} - For rainbow style\n` +
                `rome mega ${demoName} - For mega decoration`;
            await message.reply(demoMessage);
            return;
        }

        const [style, ...nameParts] = name.split(' ');
        const actualName = nameParts.join(' ') || style;
        const [emoji1, emoji2, emoji3] = getRandomEmojis(3);

        let decoratedName = '';

        if (style === 'fancy' && nameParts.length > 0) {
            const fancy = getFancyText(actualName);
            decoratedName = `${emoji1} *Fancy Styles for ${actualName}* ${emoji1}\n\n` +
                `Bubbles: ${fancy.bubbles}\n` +
                `Squares: ${fancy.squares}\n` +
                `Hearts: ${fancy.hearts}\n` +
                `Sparkles: ${fancy.sparkles}\n` +
                `Waves: ${fancy.waves}\n` +
                `Dots: ${fancy.dots}\n` +
                `Stars: ${fancy.stars}\n` +
                `Flowers: ${fancy.flowers}\n` +
                `Royal: ${fancy.royal}\n` +
                `Neon: ${fancy.neon}\n` +
                `Magic: ${fancy.magic}\n` +
                `Cloud: ${fancy.cloud}\n` +
                `Circle: ${fancy.circle}\n` +
                `Box: ${fancy.box}\n` +
                `Fire: ${fancy.fire}\n\n` +
                `*Bot by ${BOT_INFO.developer}*`;
        } else if (style === 'rainbow' && nameParts.length > 0) {
            decoratedName = `🌈 *Rainbow Style* 🌈\n\n` +
                `🔴 ${actualName.toUpperCase()} 🔴\n` +
                `🟡 ${actualName.split('').join(' ')} 🟡\n` +
                `🟢 ${actualName.split('').reverse().join('')} 🟢\n` +
                `🔵 ${actualName.split('').map(c => `${c}⋆`).join('')} 🔵`;
        } else if (style === 'mega' && nameParts.length > 0) {
            decoratedName = `${emoji1} *MEGA DECORATION* ${emoji1}\n\n` +
                `${emoji2} ${actualName.toUpperCase()} ${emoji2}\n` +
                `★彡 ${actualName.split('').join('⭐')} 彡★\n` +
                `⊱ ${actualName.split('').map(c => `${c}✧`).join('')} ⊰\n` +
                `꧁༺ ${actualName} ༻꧂\n` +
                `⫷ ${actualName.split('').reverse().join('')} ⫸`;
        } else {
            // Default decoration
            decoratedName = `${emoji1} *${actualName}* ${emoji1}\n\n` +
                `${emoji2} ${actualName.toUpperCase()} ${emoji2}\n` +
                `${emoji3} ${actualName.split('').join('⭐')} ${emoji3}\n` +
                `🎀 ${actualName.split('').reverse().join('')} 🎀`;
        }

        await message.reply(decoratedName);
    }

    // Command handlers
    if (content === 'diss') {
        const config = require('./config.js');
        await message.reply(config.dissText);
    } else if (content === 'family') {
        const config = require('./config.js');
        await message.reply(config.familyText);
    } else if (content === 'pair') {
        try {
            const code = await client.requestPairingCode();
            await message.reply(`Your pairing code is: ${code}\nPlease enter this code in your WhatsApp mobile app to pair the device.`);
        } catch (error) {
            await message.reply('Failed to generate pairing code. Please try again later.');
        }
    }
});

// Initialize the client
client.initialize();