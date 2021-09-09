import express from "express";
import router from "./routes";
import "./database";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);
export default app;
