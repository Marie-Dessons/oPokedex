import { Router } from 'express';
import { typeController } from '../controllers/typeController.js';
import { catchErrors } from '../middlewares/catchErrors.js';

const typeRouter = Router ();

// routes types
typeRouter.get('/types', catchErrors(typeController.getAllTypes));
typeRouter.get('/type/:id(\\d+)', catchErrors(typeController.getOneType));

export { typeRouter };