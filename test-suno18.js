async function test() {
    try {
        const fetchUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://suno.com/playlist/ff247038-e0ae-4778-989d-0529e575027b");
        const res = await fetch(fetchUrl);
        const json = await res.json();
        const html = json.contents;
        console.log("length:", html.length);
        console.log("includes playlist_clips:", html.includes("playlist_clips"));
    } catch(e) { console.error(e) }
}
test();
