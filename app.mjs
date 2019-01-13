import createHttpError from 'http-errors';
import express from 'express';
import morgan from 'morgan';
import errorHandler from './utils/error-handler.mjs';
import { router as indexRouter } from './routes/v1/index.mjs';
import dotenv from 'dotenv';
import cache from './cache/index.mjs';

export const app = express();

// debugger;
dotenv.config();
cache.init();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//     res.header('Content-Type', 'application/json');
//     next();
// });
app.use('/', indexRouter);
app.use((req, res, next) => {
    next(createHttpError(404));
});
app.use(errorHandler);