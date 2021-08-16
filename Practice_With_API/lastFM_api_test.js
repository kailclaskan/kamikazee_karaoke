// const cache = new LastFMCache();

// const lastFM = new LastFM({
//     "apiKey" : "352ef760acb00f622f6d58d5f83ea9a9",
//     "apiSecret" : "f49f6dc61eeeefc9a1e49cfd3299ab61",
//     "cache" : cache
// });

// lastFM.artist.getInfo({artist: 'Matchbox Twenty'}, {success: (data) => {
//     console.log(data);
// }, error: (code, message) => {
//     console.error(code, message);
// }});

let getLastFM = async(key) => {
    let res = await axios.get(`http://www.last.fm/api/auth/?api_key=${key}`)
    console.log(res)
}
getLastFM("352ef760acb00f622f6d58d5f83ea9a9")