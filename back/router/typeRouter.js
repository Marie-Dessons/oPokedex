import { Router } from 'express';
import { typeController } from '../controllers/typeController.js';
import { catchErrors } from '../middlewares/catchErrors.js';

const typeRouter = Router();

typeRouter.get('/type', catchErrors, typeController.getTypes);
typeRouter.get('/type/:id', catchErrors, typeController.getOneType);

export { typeRouter };