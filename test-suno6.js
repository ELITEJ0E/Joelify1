const https = require('https');
https.get("https://studio-api.suno.com/api/playlist/734d3af1-3ea9-4be9-82cf-e3250bd68529/", (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log("studio-api.suno.com:", res.statusCode, data.slice(0, 500));
    });
}).on("error", () => console.log("error"));

https.get("https://api.suno.com/api/playlist/734d3af1-3ea9-4be9-82cf-e3250bd68529/", (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log("api.suno.com:", res.statusCode, data.slice(0, 500));
    });
}).on("error", () => console.log("error"));
