export default async function fetchGames() {
    const gamesResponse = await fetch(`https://surrealismoapi.onrender.com/games`)
    return await gamesResponse.json();
}