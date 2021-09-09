import { Router } from "express";

import userRouter from "../routes/user_router";
const router = Router();

router.use("/users", userRouter);

export default router;
