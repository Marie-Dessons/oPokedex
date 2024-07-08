import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(
    cors({
        // La liste des sites autorisés à requêter notre API
        // A tester à partir de mercredi pour voir l'erreur
        origin: [
            // * nom de domaine
            'http://localhost:5174',
            // * address ip
            'http://127.0.0.1:5174',
            'http://localhost:3001',
            'http://127.0.0.1:3001',
            // ? on a autorisé notre front à faire des requêtes sur l'API
            'http://localhost:5173',
            'http://127.0.0.1:5173',
            'http://localhost:3000',
            'http://127.0.0.1:3000',
        ],
    })
);

import { router } from './router/indexRouter.js';
import { errorHandler } from './middlewares/errorHandlers.js';

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});