import { Router } from 'express'
import carsController from "../controllers/carsController";

const router:Router = Router()

router.get('/cars', carsController.getCars);

export default router;