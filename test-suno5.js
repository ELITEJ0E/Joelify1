const https = require('https');
https.get("https://studio-api.suno.ai/api/playlist/734d3af1-3ea9-4be9-82cf-e3250bd68529/", (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log(data.slice(0, 500));
    });
});
