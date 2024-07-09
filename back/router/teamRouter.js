import { Router } from 'express';
import { teamController } from '../controllers/teamController.js';
import { catchErrors } from '../middlewares/catchErrors.js';

const teamRouter = Router ();

// routes teams
teamRouter.get('/teams', catchErrors(teamController.getTeams));
teamRouter.get('/team/:id(\\d+)', catchErrors(teamController.getOneTeam));
teamRouter.post('/teams', catchErrors(teamController.createTeam));
teamRouter.patch('/teams/:id(\\d+)', catchErrors(teamController.updateTeam));
teamRouter.delete('/teams/:id(\\d+)', catchErrors(teamController.deleteTeam));


export { teamRouter };
