import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import { errorHandler } from './errors/error.middleware.js';
import toDoRoutes from './routes/toDo.routes.js';

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/toDos', toDoRoutes);

app.use(errorHandler)

export default app;
