import { config } from './config.js';

const api = {

    async fetchAllPokemons () {
        
            const response = await fetch(`${config.base_url}/pokemons`);
            
            const pokemons = await response.json();
            return pokemons;

    }, 
}

export { api };