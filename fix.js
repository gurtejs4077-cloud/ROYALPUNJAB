const fs = require('fs');
let content = fs.readFileSync('src/app/page.js', 'utf8');
content = content.replace('ROYAL ROYAL', 'ROYAL');
content = content.replace('ਪੰਜਾਬ', 'ਰਾਇਲ ਪੰਜਾਬ');
fs.writeFileSync('src/app/page.js', content, 'utf8');
console.log('Done');
