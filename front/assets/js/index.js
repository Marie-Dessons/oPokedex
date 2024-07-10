import { api } from "./api.js";
import { getPokemonsList } from "./pokemon.js";


async function init() {

getPokemonsList();

};

document.addEventListener('DOMContentLoaded', init);
