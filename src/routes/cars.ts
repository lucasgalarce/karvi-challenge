import { Router } from 'express'
import carsController from "../controllers/carsController";

const router:Router = Router()

router.get('/', carsController.getCars);
router.get('/getById', carsController.getCarsById);

export default router;