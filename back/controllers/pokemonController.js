import { Pokemon } from '../models/index.js';


const pokemonController = {
    async getPokemons(req, res) {
        const pokemons = await Pokemon.findAll();
        res.json(pokemons);
    },
    async getOnePokemon(req, res) {
        const pokemon = await Pokemon.findByPk(req.params.id);
        res.json(pokemon);
        console.log(pokemon);
    },
};

export { pokemonController };