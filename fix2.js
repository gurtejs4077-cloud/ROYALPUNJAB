const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src').filter(f => f.endsWith('.js') || f.endsWith('.jsx') || f.endsWith('.css') || f.endsWith('.html'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let originalContent = content;
  
  content = content.replace(/ROYAL PUNJAB \| RIDE/g, 'ROYAL PUNJAB|RIDE');
  content = content.replace(/ROYAL PUNAJB\|RIDE/g, 'ROYAL PUNJAB|RIDE'); // just in case
  
  if (content !== originalContent) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
