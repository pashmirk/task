import { app } from './app.mjs';
import dotenv from 'dotenv';

dotenv.config();

const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
});