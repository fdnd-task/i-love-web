const api_spells = "https://www.dnd5eapi.co/api/spells"

// hier maak ik informatie uit de spells API
const spellsResponse = await fetch(api_spells);

// nu maak ik er een JSON object van
const spellsResponseJSON = await spellsResponse.json();

// Hier zet ik de data van de spells naar de pagina