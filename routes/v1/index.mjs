import express from 'express';
import drones from './../../controllers/drones/index.mjs'

export const router = express.Router();

router.get('/', drones.get);