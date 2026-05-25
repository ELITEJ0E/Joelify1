const https = require('https');
https.get("https://suno.com/playlist/bd16ed21-08fa-4a25-aea5-8fa986927a3c", (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        const startIdx = data.indexOf('{"playlist":');
        if (startIdx !== -1) {
            let braceCount = 0;
            for (let i = startIdx; i < data.length; i++) {
                if (data[i] === '{') braceCount++;
                else if (data[i] === '}') {
                    braceCount--;
                    if (braceCount === 0) {
                        try {
                           let sub = data.substring(startIdx, i + 1);
                           // unescape if needed:
                           sub = sub.replace(/\\"/g, '"');
                           const json = JSON.parse(sub);
                           console.log("Found playlist clips:", json?.playlist?.playlist_clips?.length);
                        } catch(e) {
                           console.error(e.message);
                        }
                        break;
                    }
                }
            }
        }
    });
});
