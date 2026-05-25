const fs = require('fs');

async function test() {
    try {
        const res = await fetch("http://localhost:3000/api/suno-playlist?id=ff247038-e0ae-4778-989d-0529e575027b");
        const json = await res.json();
        console.log("Returned tracks:", json.tracks?.length);
    } catch(e) { console.error(e) }
}
test();
