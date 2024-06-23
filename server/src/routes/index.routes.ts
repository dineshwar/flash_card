import { Router } from "express";
import protectedRouter from "@routes/protected.routes";
import authRoutes from "@routes/auth.routes";

export default () => {
  const app = Router();
  app.use(authRoutes);
  app.use(protectedRouter);
  return app;
};
