import { getPokemonsList } from "./pokemon.js";
import { showAllTeams } from "./team.js";


async function init() {

getPokemonsList();
showAllTeams();

};

document.addEventListener('DOMContentLoaded', init);
