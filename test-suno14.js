async function test() {
    try {
        const res = await fetch("https://api.allorigins.win/raw?url=https://suno.com/playlist/ff247038-e0ae-4778-989d-0529e575027b");
        const text = await res.text();
        console.log("allorigins:", text.slice(0,100));
    } catch(e) { console.error(e) }
}
test();
