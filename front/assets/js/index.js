import { api } from './api.js';


async function init() {

    console.log('init');

    const allPokemons = await api.fetchAllPokemons();
    console.log(allPokemons);

};

document.addEventListener('DOMContentLoaded', init);