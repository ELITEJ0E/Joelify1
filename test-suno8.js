async function test() {
    try {
        const res = await fetch("https://suno.com/playlist/ff247038-e0ae-4778-989d-0529e575027b");
        console.log("HTML length:", (await res.text()).length);
    } catch(e) {}
}
test();
