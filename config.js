const yaml = require('yaml');
const fs = require('fs');
const path = require('path');

const uri = path.resolve(__dirname, 'config.yaml');
const settings = yaml.parse(fs.readFileSync(uri,'utf-8'));

module.exports = settings;