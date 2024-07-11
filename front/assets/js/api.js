const config = {url: 'http://localhost:3000'};
  
  export { config };

const api = {

    async fetchAllPokemons () {
        
            const response = await fetch(`${config.url}/pokemons`);

            const pokemons = await response.json();
            return pokemons;
    }, 
    async fetchOnePokemon (id) {
        try {
            const httpResponses = await fetch(`${config.url}/pokemon/${id}`);

            if(!httpResponses.ok) return null;

            const pokemon = await httpResponses.json();
            return pokemon
    
        } catch (error) {
            console.log(error);
        }
    },
    async fetchAllTeams() {
        try {
            const httpResponses = await fetch(`${config.url}/teams`);

            if(!httpResponses.ok) return null;

            const teams = await httpResponses.json();
            return teams
    
        } catch (error) {
            console.log(error);
        }
    },
    async fetchOneTeam(id) {
        try {
            const httpResponses = await fetch(`${config.url}/team/${id}`);

            if(!httpResponses.ok) return null;

            const team = await httpResponses.json();
            return team
    
        } catch (error) {
            console.log(error);
        }
    },
    async fetchAllTypes() {
        try {
            const httpResponses = await fetch(`${config.url}/types`);

            if(!httpResponses.ok) return null;

            const types = await httpResponses.json();
            return types
    
        } catch (error) {
            console.log(error);
        }
    },
    async fetchOneType(id) {
        try {
            const httpResponses = await fetch(`${config.url}/types/${id}`);

            if(!httpResponses.ok) return null;

            const type = await httpResponses.json();
            return type
    
        } catch (error) {
            console.log(error);
        }
    },

}

export { api };