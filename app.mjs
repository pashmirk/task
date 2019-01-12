import createHttpError from 'http-errors';
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import errorHandler from './utils/error-handler.mjs';
import { router as indexRouter } from './routes/v1/index.mjs';

export const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);
app.use((req, res, next) => {
    next(createHttpError(404));
});
app.use(errorHandler);