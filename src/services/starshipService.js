const BASE_URL = 'https://swapi.dev/api/starships/';

export async function getStarships() {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) throw new Error('Failed to fetch starships');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function searchStarships(query) {
  try {
    const response = await fetch(`${BASE_URL}?search=${query}`);
    if (!response.ok) throw new Error('Failed to fetch starships');
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}
