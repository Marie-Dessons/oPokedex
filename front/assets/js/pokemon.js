import { api } from "./api.js";

async function getPokemonsList() {

    const pokemonTemplate = document.getElementById('pokemon-list-item-template modal');

    const pokemonContainer = document.getElementById('pokemon-container');

    pokemonContainer.textContent = '';

    const allPokemons = await api.fetchAllPokemons();

    allPokemons.forEach(pokemon => {
        const clone = document.importNode(pokemonTemplate.content, true);
            const pokename = clone.querySelector('.card-content');
            pokename.textContent = pokemon.name;
            const pokeimg = clone.querySelector('.pkm_img');
            pokeimg.src = `../assets/img/${pokemon.id}.webp`;
            pokeimg.alt = pokemon.name;
            pokemonContainer.appendChild(clone);
        
    });
}

export { getPokemonsList };