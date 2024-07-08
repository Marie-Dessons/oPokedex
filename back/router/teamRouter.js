import { Router } from 'express';
import { teamController } from '../controllers/teamController.js';
import { catchErrors } from '../middlewares/catchErrors.js';

const teamRouter = Router();

teamRouter.get('/team', catchErrors, teamController.getTeams);
teamRouter.get('/team/:id', catchErrors, teamController.getOneTeam);

export { teamRouter };