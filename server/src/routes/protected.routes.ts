import { Router } from "express";

const protectedRouter = Router();

protectedRouter.get("/post");
protectedRouter.post("/post");

export default protectedRouter;
