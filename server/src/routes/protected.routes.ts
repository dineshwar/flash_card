import { Router } from "express";

const protectedRouter = Router();

protectedRouter.get("/post");

export default protectedRouter;
