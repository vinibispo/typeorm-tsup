import { Router } from "express";
import userController from "../controllers/user_controller";
const router = Router();

router.get("/", userController.index);
router.get("/:id", userController.show);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.destroy);

export default router;
