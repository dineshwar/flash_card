import { Router } from "express";
import protectedRouter from "@routes/protected.routes";

export default () => {
  const app = Router();
  app.use(protectedRouter);
  return app;
};
