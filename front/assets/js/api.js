const config = {url: 'http://localhost:3000'};
  
  export { config };

const api = {

    async fetchAllPokemons () {
        
            const response = await fetch(`${config.url}/pokemons`);
            const pokemons = await response.json();
            return pokemons;
    }, 

    async fetchPokemon (id) {
        
            const response = await fetch(`${config.url}/pokemons/${id}`);
            console.log(response);
            const pokemon = await response.json();
            return pokemon;
    }

}

export { api };