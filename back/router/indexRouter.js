import { Router } from 'express';
import { pokemonRouter } from './pokemonRouter.js';
import { teamRouter } from './teamRouter.js';
import { typeRouter } from './typeRouter.js';

const router = Router ();

router.use(pokemonRouter);
router.use(teamRouter);
router.use(typeRouter);

export { router };