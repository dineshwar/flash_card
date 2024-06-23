import express, { Request, Response } from "express";
import cors from "cors";
import config from "@config/index.config";
import routes from "@routes/index.routes";

export default ({ app }: { app: express.Application }) => {
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());
  // Transforms the raw string of req.body into json
  app.use(express.json());
  // Load API routes
  app.use(config.api_prefix, routes());
};
