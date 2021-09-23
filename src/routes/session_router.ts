import { Router } from "express";
import sessionController from "../controllers/session_controller";
const router = Router();

router.get("/", sessionController.index);
router.get("/:id", sessionController.show);
router.post("/", sessionController.create);
router.delete("/:id", sessionController.destroy);

export default router;
