import { Router } from "express";
import helloController from "../controllers/hello_controller";
const router = Router();

router.get("/", helloController.index);

export default router;
