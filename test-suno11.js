const fs = require('fs');
const data = fs.readFileSync('joels-playlist.html', 'utf8');

for (const match of data.matchAll(/self\.__next_f\.push\((\[1,"(?:\\.|[^"\\])*"\])\)/g)) {
    try {
        const arr = JSON.parse(match[1]);
        const str = arr[1];
        if (typeof str !== 'string') continue;
        
        const key = '"playlist_clips":';
        let startIdx = str.indexOf(key);
        if (startIdx !== -1) {
             let objStart = str.lastIndexOf('{', startIdx);
             console.log("Found in str with objStart:", objStart);
             
             let braceCount = 0;
             for (let i = objStart; i < str.length; i++) {
                 if (str[i] === '{') braceCount++;
                 else if (str[i] === '}') {
                     braceCount--;
                     if (braceCount === 0) {
                         const json = JSON.parse(str.substring(objStart, i + 1));
                         console.log("Parsed JSON clips length:", json.playlist_clips.length);
                         break;
                     }
                 }
             }
        }
    } catch(e) {}
}
