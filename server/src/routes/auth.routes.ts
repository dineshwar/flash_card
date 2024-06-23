import { Router } from "express";
import { AuthController } from "@controllers/auth.controller";

const authRouter = Router();
const authController = new AuthController();

authRouter.get("/signup", authController.signup);
authRouter.get("/login", authController.login);

export default authRouter;
