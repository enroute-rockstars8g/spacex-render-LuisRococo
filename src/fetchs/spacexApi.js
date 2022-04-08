export async function apiFetchMissions () {
    const limitResults = 100;
    const url = `https://api.spacex.land/rest/missions?limit=${limitResults}`;
    const results = await fetch(url);
    const resultsJSON = await results.json();
    return resultsJSON;
}