import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(cookieParser());




export default app;
