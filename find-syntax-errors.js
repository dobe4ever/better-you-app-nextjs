const fs = require('fs');
const path = require('path');
const acorn = require('acorn');

function checkSyntax(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  try {
    acorn.parse(content, { ecmaVersion: 2020 });
  } catch (error) {
    console.error(`Syntax error in ${filePath}:`);
    console.error(error.message);
  }
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (path.extname(filePath) === '.js' || path.extname(filePath) === '.tsx') {
      checkSyntax(filePath);
    }
  });
}

walkDir('.');