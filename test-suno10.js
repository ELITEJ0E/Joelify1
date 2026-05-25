const fs = require('fs');
const data = fs.readFileSync('joels-playlist.html', 'utf8');
let pIdx = data.lastIndexOf('{', data.indexOf('playlist_clips'));
console.log(data.slice(pIdx, data.indexOf('playlist_clips') + 30));
