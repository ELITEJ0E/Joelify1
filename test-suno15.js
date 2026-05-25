async function test() {
    try {
        const res = await fetch("https://api.allorigins.win/raw?url=https://suno.com/playlist/ff247038-e0ae-4778-989d-0529e575027b");
        const html = await res.text();
        
        let clipsToUse = [];
        for (const match of html.matchAll(/self\.__next_f\.push\((\[1,"(?:\\.|[^"\\])*"\])\)/g)) {
            try {
                const arr = JSON.parse(match[1]);
                const str = arr[1];
                if (typeof str !== 'string') continue;
                
                let startIdx = str.indexOf('"playlist_clips":');
                if (startIdx !== -1) {
                    const objStart = str.lastIndexOf('{', startIdx);
                    if (objStart !== -1) {
                        let braceCount = 0;
                        for (let i = objStart; i < str.length; i++) {
                            if (str[i] === '{') braceCount++;
                            else if (str[i] === '}') {
                                braceCount--;
                                if (braceCount === 0) {
                                    try {
                                        const json = JSON.parse(str.substring(objStart, i + 1));
                                        if (json?.playlist_clips?.length > 0) {
                                            clipsToUse = json.playlist_clips;
                                            break;
                                        }
                                    } catch(e) {}
                                }
                            }
                        }
                    }
                }
                if (clipsToUse.length > 0) break;
            } catch(e) {}
        }
        console.log("length:", clipsToUse.length);
    } catch(e) { console.error(e) }
}
test();
