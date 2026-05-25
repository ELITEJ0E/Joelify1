const fs = require('fs');
const data = fs.readFileSync('./suno-playlist.html', 'utf8');
const pIdx = data.indexOf('"playlist":');
console.log('Index of "playlist": ', pIdx);
const stringData = data.slice(Math.max(0, pIdx - 20), pIdx + 100);
console.log(stringData);

const nameIdx = data.indexOf('"name":"');
console.log('');
console.log('Index of "name":" ', nameIdx, data.slice(Math.max(0, nameIdx - 20), nameIdx + 100));

const playlistIdx = data.indexOf('playlist_clips');
console.log('Index of playlist_clips: ', playlistIdx, data.slice(Math.max(0, playlistIdx - 20), playlistIdx + 100));

const clipsIdx = data.indexOf('clips');
console.log('Index of clips: ', clipsIdx, data.slice(Math.max(0, clipsIdx - 20), clipsIdx + 100));
