const fs = require('fs');
const path = require('path');

const uiComponentsDir = path.join(__dirname, 'src', 'app', 'components', 'ui');

// Get all TypeScript files in the UI components directory
const files = fs.readdirSync(uiComponentsDir)
  .filter(file => file.endsWith('.tsx') || file.endsWith('.ts'));

// Process each file
files.forEach(file => {
  const filePath = path.join(uiComponentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace the import statement
  const updatedContent = content.replace(
    /import\s+{\s*cn\s*}\s+from\s+["']@\/lib\/utils["']/g,
    'import { cn } from "@/app/lib/utils"'
  );
  
  // Write the updated content back to the file
  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated import in ${file}`);
  }
});

console.log('Import updates completed!'); 