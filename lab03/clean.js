const fs = require('fs');
const path = require('path');

const dir = 'c:\\Users\\231975\\Documents\\lab03\\Full-stack-programming-lab\\lab03';

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function (file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.js') || file.endsWith('.html') || file.endsWith('.css')) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(dir);
let count = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Remove emojis
    content = content.replace(/\p{Emoji_Presentation}/gu, '');

    // Remove gradients
    if (content.includes('gradient')) {
        content = content.replace(/linear-gradient\([^)]+\)/g, 'var(--clr-accent)');
        content = content.replace(/radial-gradient\([^)]+\)/g, 'var(--clr-accent)');
    }

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated: ${file}`);
        count++;
    }
});
console.log(`Updated ${count} files.`);
