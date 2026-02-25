const fs = require('fs');
const path = require('path');

const files = [
    'task2/script.js',
    'task3/script.js',
    'task4/script.js',
    'task5/script.js',
    'task7/script.js'
];

// Emojis to remove based on grep output + general emoji range
const emojiRegex = /[📝🔄🔍👨‍🎓📦🗑️📚❌✅🛒📋]/g;
const generalEmojiRegex = /[\u{1F300}-\u{1F6FF}\u{1F900}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/gu;

files.forEach(f => {
    const filePath = path.join(__dirname, f);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(emojiRegex, '');
        content = content.replace(generalEmojiRegex, '');
        // Clean up any double spaces left behind after removing emojis
        content = content.replace(/ \)/g, ')').replace(/ >/g, '>').replace(/  +/g, ' ');
        fs.writeFileSync(filePath, content);
    }
});
console.log('Emojis removed.');
