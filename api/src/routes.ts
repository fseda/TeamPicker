import { Router } from 'express';

const router = Router();

const playerController = new PlayerController();

router.post('/players', playerController.add);

