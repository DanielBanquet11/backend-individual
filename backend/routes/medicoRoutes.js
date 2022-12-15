import express from 'express';
import {
prueba
} from '../controllers/medicoController.js';
const router = express.Router();
// Rutas Publicas
router.get('/prueba', prueba);
export default router;