import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    ]
}));

import { router } from './router/indexRouter.js';
import { errorHandler } from './middlewares/errorHandlers.js';

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});