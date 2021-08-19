import { Router } from "express";

import helloRouter from "../routes/hello_router";
const router = Router();

router.use("/hello", helloRouter);

export default router;
