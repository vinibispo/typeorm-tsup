import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Session } from "../entity/Session";
import { User } from "../entity/User";
class UserController {
  async index(req: Request, res: Response) {
    const { user_id } = req.params;
    const user = await this.getUser(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json(user.sessions);
  }
  async show(req: Request, res: Response) {
    const { user_id, id } = req.params;
    const user = await this.getUser(user_id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const sessionRepository = getRepository(Session);
    const session = await sessionRepository.findOne({ where: { user_id, id } });
    if (!session) {
      return res.status(404).json({ error: "Session not found" });
    }
    return res.json(session);
  }
  async create(req: Request, res: Response) {
    const { user_id } = req.params;
    const { name } = req.body;
    const user = await this.getUser(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const sessionRepository = getRepository(Session);
    const id = parseInt(user_id);
    const session = sessionRepository.create({ user_id: id, name });
    await sessionRepository.save(session);
    return res.json(session);
  }
  async destroy(req: Request, res: Response) {
    const { id, user_id } = req.params;
    const user = await this.getUser(user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    const sessionRepository = getRepository(Session);
    const session = await sessionRepository.findOne({ where: { id, user_id } });
    if (!session) {
      return res.status(404).json({ error: "Seession Not found" });
    }
    await sessionRepository.delete(session);
    return res.status(204).send();
  }
  private async getUser(id: string | number) {
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne(id);
    return user;
  }
}

const helloController = new UserController();
export default helloController;
