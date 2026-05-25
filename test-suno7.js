async function test() {
    try {
        const res = await fetch("https://studio-api.suno.ai/api/playlist/734d3af1-3ea9-4be9-82cf-e3250bd68529/");
        console.log("studio-api.suno.ai", res.status, await res.text());
    } catch(e) { console.log(e.message) }

    try {
        const res2 = await fetch("https://studio-api.suno.com/api/playlist/734d3af1-3ea9-4be9-82cf-e3250bd68529/");
        console.log("studio-api.suno.com", res2.status, await res2.text());
    } catch(e) { console.log(e.message) }
}
test();
