const fs = require('fs');
const path = require('path');
const yaml = require('yaml');

const beasts_files = fs.readdirSync(path.resolve(__dirname, 'bestiary'));
const beasts = [];

for(let b of beasts_files) {
    beasts.push(yaml.parse(fs.readFileSync(b,'utf-8')));
}