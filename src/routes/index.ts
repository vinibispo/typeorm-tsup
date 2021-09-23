import { Router } from "express";

import userRouter from "../routes/user_router";
import sessionRouter from "../routes/session_router";
const router = Router();

router.use("/users", userRouter);
router.use(`/users/:user_id/sessions`, sessionRouter);

export default router;
