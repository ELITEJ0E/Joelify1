const fs = require('fs');
async function test() {
    try {
        const res = await fetch("https://suno.com/playlist/ff247038-e0ae-4778-989d-0529e575027b");
        let data = await res.text();
        fs.writeFileSync('joels-playlist.html', data);
        
        // Find playlist_clips
        const startIdx = data.indexOf('{"playlist":');
        console.log("startIdx", startIdx);
        
        let pIdx = data.indexOf('playlist_clips');
        console.log("playlist_clips", pIdx);
        if (pIdx > -1) {
             console.log(data.slice(Math.max(0, pIdx - 50), Math.min(data.length, pIdx + 50)));
        }
    } catch(e) {}
}
test();
