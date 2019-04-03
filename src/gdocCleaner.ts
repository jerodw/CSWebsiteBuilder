import * as fs from 'fs';


const args = process.argv.slice(2);
if (args.length === 0) {
    console.log("Usage: npm run clean <file> \n file: relative location of the html to be cleaned.")
    process.exit();
}

let filepath = args[0];

if (!fs.existsSync(filepath)) {
    throw new Error("File not found");
}

let fileContents = fs.readFileSync(filepath, {encoding: 'utf-8'});

// Remove all id's
fileContents = fileContents.replace(/ id="(?:\w|\d|\.)*"/gm, '')
// Remove all span tags
fileContents = fileContents.replace(/<span((id="(?:\w|\d)*")?|(class="(?:\w|\d|\s)*")?|(style="(\w|\d|;|\.|:|\(|\)|-|_|#|\s)*")|\s)*>/gms, '');
fileContents = fileContents.replace(/<\/span>/gm, '');
fileContents = fileContents.replace(/class="(?:\w|\d|\s)* title"/gm, 'class="display-4"');
fileContents = fileContents.replace(/class="(?:\w|\d|\s)* subtitle"/gm, 'class="text-muted"');
fileContents = fileContents.replace(/<p class="text-muted">((?:\s|\w|\d)*)<\/p>/gm, '<h5 class="text-muted">$1</h5>');
fileContents = fileContents.replace(/<style type="text\/css">(?:\w|\W)*<\/style>/gms, '');
fileContents = fileContents.replace(/ class="c(?:\d)*(?:\w|\d|\s|-|_)*"/gms, '');

// If don't we have a destructive clean, create a new file
if (!(args.length === 2 && args[1] === 'destructive')) {
    filepath = filepath.replace(/.html/, '-clean.html');
}

fs.writeFileSync(filepath, fileContents.trim());