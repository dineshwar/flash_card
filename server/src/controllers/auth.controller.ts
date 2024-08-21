import { Request, Response } from "express";

export class AuthController {
  async login(req: Request, res: Response) {
    const body = req.body;
    res.status(200).send("Hello");
  }

  async signup(req: Request, res: Response) {
    res.status(200).send("Working");
  }
}
