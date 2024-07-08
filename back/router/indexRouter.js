import { Router } from 'express';  // Importez Router depuis express (assurez-vous de bien importer 'Router')

import { pokemonRouter } from './pokemonRouter.js';
import { teamRouter } from './teamRouter.js';
import { typeRouter } from './typeRouter.js';
import { pokemonController } from '../controllers/pokemonController.js';

const router = Router();  // Utilisez Router() pour créer une nouvelle instance de routeur

router.get('/',pokemonController.getPokemons);

router.use('/pokemon', pokemonRouter);
router.use('/team', teamRouter);
router.use('/type', typeRouter);

export { router };