import { Router } from 'express';
import { pokemonController } from '../controllers/pokemonController.js';
import { catchErrors } from '../middlewares/catchErrors.js';

const pokemonRouter = Router ();

// routes pokémons
pokemonRouter.get('/pokemons', catchErrors(pokemonController.getAllPokemons));
pokemonRouter.get('/pokemon/:id(\\d+)', catchErrors(pokemonController.getOnePokemon));

export { pokemonRouter };