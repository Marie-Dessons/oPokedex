import { Pokemon } from '../models/index.js';


const pokemonController = {
    async getAllPokemons(req, res) {
        const pokemons = await Pokemon.findAll();

        res.json(pokemons);

        if (!pokemons) {    
            res.status(404).json({ message: 'Aucun pokemon trouvé' });
        }
        
    },
    async getOnePokemon(req, res) {
        const id = req.params.id;
        const pokemon = await Pokemon.findByPk(id, { include: ['types'] });
        res.json(pokemon);
        if (!pokemon) {    
            res.status(404).json({ message: 'Pokemon non trouvé' });
        }   
    },
};

export { pokemonController };