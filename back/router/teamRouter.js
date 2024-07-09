import { Router } from 'express';
import { teamController } from '../controllers/teamController.js';
import { catchErrors } from '../middlewares/catchErrors.js';

const teamRouter = Router ();

// routes teams
teamRouter.get('/teams', catchErrors(teamController.getTeams));
teamRouter.get('/team/:id(\\d+)', catchErrors(teamController.getOneTeam));
teamRouter.post('/teams', catchErrors(teamController.createTeam));
teamRouter.patch('/teams/:id(\\d+)', catchErrors(teamController.updateTeam));
teamRouter.delete('/teams/:teamId(\\d+)', catchErrors(teamController.deleteTeam));
teamRouter.put('/teams/:teamId(\\d+)/pokemons/:pokemonId(\\d+)', catchErrors(teamController.getpokemonsteam));
teamRouter.delete('/teams/:teamId(\\d+)/pokemons/:pokemonId(\\d+)', catchErrors(teamController.deletepokemonsteam));

export { teamRouter };
