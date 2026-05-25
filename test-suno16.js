async function test() {
    try {
        const res = await fetch("https://api.allorigins.win/raw?url=https://suno.com/playlist/ff247038-e0ae-4778-989d-0529e575027b");
        const html = await res.text();
        console.log("length:", html.length);
        console.log("includes playlist_clips:", html.includes("playlist_clips"));
    } catch(e) { console.error(e) }
}
test();
