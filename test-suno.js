const https = require('https');
https.get("https://suno.com/playlist/bd16ed21-08fa-4a25-aea5-8fa986927a3c", (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
        console.log(data.slice(0, 500));
        console.log("Includes self.__next_f.push:", data.includes("self.__next_f.push"));
    });
});
