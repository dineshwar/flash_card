import express, { Request, Response } from "express";
import cors from "cors";

export default ({ app }: { app: express.Application }) => {
  // Enable Cross Origin Resource Sharing to all origins by default
  app.use(cors());
  // Transforms the raw string of req.body into json
  app.use(express.json());

  app.get("/", (req, resp) => {
    resp.send("Hello, World!!");
  });
};
