import { Request, Response } from "express";

export class AuthController {
  async post(req: Request, res: Response) {
    res.status(200).send("Hello");
  }
}
