async function test() {
    try {
        const url = "https://corsproxy.io/?url=https%3A%2F%2Fsuno.com%2Fplaylist%2Fff247038-e0ae-4778-989d-0529e575027b";
        const res = await fetch(url);
        const html = await res.text();
        console.log("corsproxy.io length:", html.length);
        console.log("includes clips:", html.includes("playlist_clips"));
    } catch(e) { console.error(e) }
}
test();
