import { Router } from 'express';
import { pokemonController } from '../controllers/pokemonController.js';
import { catchErrors } from '../middlewares/catchErrors.js';

const pokemonRouter = Router();

pokemonRouter.get('/pokemons', pokemonController.getPokemons);
pokemonRouter.get('/pokemons/:id', catchErrors(pokemonController.getOnePokemon));

export { pokemonRouter };