import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entity/User";
class UserController {
  async index(req: Request, res: Response) {
    const usersRepository = getRepository(User);
    const users = await usersRepository.find();
    return res.json(users);
  }
  async show(req: Request, res: Response) {
    const { id } = req.params;
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.json(user);
  }
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;
    const usersRepository = getRepository(User);
    const user = usersRepository.create({ name, email, password });
    await usersRepository.save(user);
    const newUser = { ...user, password: null };
    return res.status(201).json(newUser);
  }
  async update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, password } = req.body;
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne(id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    usersRepository.merge(user, { name, password });
    const newUser = await usersRepository.save(user);
    return res.json({ ...newUser, name, password: null });
  }
  async destroy(req: Request, res: Response) {
    const { id } = req.params;
    const usersRepository = getRepository(User);
    const user = await usersRepository.findOne(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await usersRepository.delete(user);
    return res.status(204).send();
  }
}

const helloController = new UserController();
export default helloController;
