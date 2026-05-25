async function test() {
    try {
        const start = Date.now();
        const fetchUrl = "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent("https://suno.com/playlist/ff247038-e0ae-4778-989d-0529e575027b");
        const res = await fetch(fetchUrl);
        const html = await res.text();
        console.log("length:", html.length, "time:", Date.now() - start, "ms");
        console.log("includes playlist_clips:", html.includes("playlist_clips"));
    } catch(e) { console.error(e) }
}
test();
