const https = require('https');
const fs = require('fs');
https.get("https://suno.com/playlist/bd16ed21-08fa-4a25-aea5-8fa986927a3c", (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        fs.writeFileSync('./suno-playlist.html', data);
        console.log("Written!");
    });
});
