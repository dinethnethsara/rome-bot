# <div align="center">🤖 ROME WhatsApp Bot</div>

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)
![Node](https://img.shields.io/badge/node-v14+-orange.svg?style=for-the-badge)
[![Stars](https://img.shields.io/github/stars/DEMO/rome-whatsapp-bot?style=for-the-badge)](https://github.com/dinethnethsara/rome-bot/stargazers)

<p align="center">
  <img src="/api/placeholder/400/320" alt="ROME WhatsApp Bot Logo">
</p>

> A powerful and feature-rich WhatsApp bot built with whatsapp-web.js, offering text styling, 
> group management, and interactive commands.

[Features](#-features) • 
[Installation](#-installation) • 
[Commands](#-commands) • 
[Configuration](#-configuration) • 
[Support](#-support)

</div>

---

## ✨ Features

<table>
  <tr>
    <td width="50%">
      <h3>🎨 Creative Styling</h3>
      <ul>
        <li>Fancy stylized names with multiple designs</li>
        <li>Artistic text transformations (bubbles, squares, rainbow)</li>
        <li>Unique typography and decoration options</li>
      </ul>
    </td>
    <td width="50%">
      <h3>👥 Group Management</h3>
      <ul>
        <li>Anti-link protection & spam detection</li>
        <li>Member limits & admin-only mode</li>
        <li>Automatic moderation tools</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h3>🏆 User Engagement</h3>
      <ul>
        <li>Interactive level system with XP</li>
        <li>Rewards and achievements</li>
        <li>Custom user rankings</li>
      </ul>
    </td>
    <td width="50%">
      <h3>🤝 Community Tools</h3>
      <ul>
        <li>Customizable auto-replies</li>
        <li>Welcome messages for new members</li>
        <li>Automatic display picture rotation</li>
      </ul>
    </td>
  </tr>
</table>

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **Chrome** browser installed
- **WhatsApp** account

## 🚀 Installation

<details open>
<summary><b>Quick Setup</b></summary>

1️⃣ **Clone the repository**
```bash
git clone https://github.com/dinethnethsara/rome-bot.git
cd rome-whatsapp-bot
```

2️⃣ **Install dependencies**
```bash
npm install
```

3️⃣ **Configure settings**
```bash
cp config.example.js config.js
# Edit config.js with your preferred settings
```

4️⃣ **Start the bot**
```bash
npm start
```

</details>

<details>
<summary><b>Connecting Your Device</b></summary>

When you start the bot for the first time:

1. A QR code or pairing code will be generated
2. Scan the QR code or enter the pairing code in your WhatsApp mobile app
3. Your bot will connect to WhatsApp Web
4. You'll see a "Connected" message when successful

</details>

## 🎮 Commands

<div class="commands-container">

| Command | Description | Example |
|---------|-------------|---------|
| `menu` or `help` | Show all available commands | `menu` |
| `alive` | Check if the bot is active | `alive` |
| `rome <name>` | Basic name decoration | `rome John` |
| `rome fancy <name>` | Apply fancy text styles | `rome fancy Sarah` |
| `rome rainbow <name>` | Apply rainbow style | `rome rainbow Mike` |
| `rome mega <name>` | Apply mega decoration | `rome mega Alex` |
| `diss` | Display ROME official text | `diss` |
| `family` | Show ROME family members | `family` |
| `pair` | Generate a new pairing code | `pair` |
| `level` | Check your current level | `level` |

</div>

## 🔤 Text Style Examples

<div align="center">

| Style | Example | Command |
|-------|---------|---------|
| **Bubbles** | h⃝e⃝l⃝l⃝o⃝ | `rome bubbles hello` |
| **Squares** | h️⃞e️⃞l️⃞l️⃞o️⃞ | `rome squares hello` |
| **Hearts** | ♥️hello♥️ | `rome hearts hello` |
| **Sparkles** | h✧e✧l✧l✧o | `rome sparkles hello` |
| **Rainbow** | 🔴h🟡e🟢l🔵l🟣o | `rome rainbow hello` |

</div>

## 🔧 Configuration

Create a `config.js` file in the root directory with the following structure:

<details>
<summary><b>View Configuration Template</b></summary>

```javascript
module.exports = {
  // Display picture settings
  autoChangeDP: true,
  dpChangeInterval: 3600000, // 1 hour in milliseconds
  displayPictures: [
    "https://example.com/dp1.jpg",
    "https://example.com/dp2.jpg"
  ],
  
  // Message filter settings
  messageFilter: {
    enabled: true,
    bannedWords: ["spam", "inappropriate"],
    warningMessage: "⚠️ This message contains banned content!"
  },
  
  // Auto-reply settings
  autoReply: {
    enabled: true,
    greetingMessage: "Welcome to the group, {username}! 🎉",
    triggers: {
      "hello": "Hey there! How can I help you today?",
      "good morning": "Good morning! Have a wonderful day ahead! ☀️"
    }
  },
  
  // Group settings
  groupSettings: {
    welcomeMessage: true,
    antiLink: true,
    memberLimit: 100,
    adminOnly: false
  },
  
  // Level system
  levelSystem: {
    enabled: true,
    xpPerMessage: 5,
    xpPerImage: 15,
    xpPerVideo: 20,
    levelUpMultiplier: 100,
    levelUpAnnouncement: true
  },
  
  // Default language
  defaultLanguage: "en",
  translations: {
    en: {
      levelUp: "🎉 Congratulations! You have reached level {level}!"
    }
  },
  
  // Bot text content
  dissText: "█▀█ █▀▀ █▀▀ █ █▀▀ █ ▄▀█ █░░\n█▄█ █▀░ █▀░ █ █▄▄ █ █▀█ █▄▄\n\n◃🔱🅣𝙷𝙸𝙽𝙺 🅣𝚆𝙸𝙲𝙴 🅑𝙴𝙵𝙾𝚁𝙴 🅕𝙸𝙶𝙷𝚃 🅦𝙸𝚃𝙷 🅤𝚂🔱▹",
  familyText: "// Family text content here"
};
```

</details>

## ⚙️ Advanced Configuration

<details>
<summary><b>Customizing Bot Name</b></summary>

Modify the `BOT_INFO` object in `index.js`:

```javascript
const BOT_INFO = {
    name: "Your Bot Name",
    developer: "Your Name",
    version: "1.0.0"
};
```

</details>

<details>
<summary><b>Adding Custom Commands</b></summary>

To add new commands, modify the message event listener in `index.js`:

```javascript
// Handle message events
client.on('message', async (message) => {
    // Add your custom command here
    if (content === 'yourcommand') {
        await message.reply('Your custom response');
    }
});
```

</details>

## 🛠️ Troubleshooting

<details>
<summary><b>Common Issues & Solutions</b></summary>

| Issue | Solution |
|-------|----------|
| Bot not connecting | Make sure Chrome is installed in the specified path |
| Pairing issues | Try regenerating a new pairing code with the `pair` command |
| Message not sending | Check if your WhatsApp account is properly connected |
| Slow performance | Reduce the number of active features in the configuration |
| Error on startup | Check logs for specific error messages and ensure all dependencies are installed |

</details>

## 🌟 Project Showcase

<div align="center">
<p>
  <img src="/api/placeholder/320/180" alt="ROME Bot in Action">
  <img src="/api/placeholder/320/180" alt="Text Styling Example">
</p>
</div>

## 🔄 Updates

- **v1.0.0** - Initial release with core features
- **Coming Soon:**
  - Voice message support
  - Interactive polls
  - Advanced text animations
  - Multi-language support

## 📊 Performance

<div align="center">

| Feature | Performance Impact | Recommendation |
|---------|-------------------|----------------|
| Text Styling | Low | Enable for all users |
| Auto DP Change | Medium | Use lower frequency for better performance |
| Level System | Low | Keep enabled for better engagement |
| Anti-Link | Low | Recommended for all groups |

</div>

## 🤝 Support

<div align="center">

Need help? Join our community:

[![WhatsApp Group](https://img.shields.io/badge/WhatsApp-Group-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/example)
[![Telegram](https://img.shields.io/badge/Telegram-Channel-0088CC?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/example)
[![Discord](https://img.shields.io/badge/Discord-Server-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/example)

</div>

## 📄 License

<div align="center">

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

</div>

---

<div align="center">

### 👨‍💻 Created By

**DEMO - ROME OFFICIAL**

<p>
  <img src="/api/placeholder/150/150" alt="DEMO - ROME OFFICIAL" style="border-radius:50%">
</p>

© 2025 ROME WhatsApp Bot • All Rights Reserved

</div>
