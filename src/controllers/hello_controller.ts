import { Request, Response } from "express";
import Hello from "../models/hello_model";
class HelloController {
  async index(req: Request, res: Response) {
    Hello.saySomething("Thiago");
    return res.json({ hello: "World" });
  }
}

const helloController = new HelloController();
export default helloController;
