import { Router } from "express";

const authRouter = Router();

authRouter.get("/signup");
authRouter.get("/login");

export default authRouter;
