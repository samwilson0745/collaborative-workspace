import express from 'express';
import { checkRouter } from './routes/check';
const app = express();
app.use(express.json());

//routes
app.use("/api",checkRouter)

export { app }