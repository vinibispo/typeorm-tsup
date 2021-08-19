import { Request, Response } from "express";
class HelloController {
  async index(req: Request, res: Response) {
    return res.json({ hello: "World" });
  }
}

const helloController = new HelloController();
export default helloController;
