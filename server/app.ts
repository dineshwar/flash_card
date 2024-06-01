const express = require("express");
const dotenv = require("dotenv");
import { Request, Response } from "express";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

app
  .listen(port, () => {
    console.log("Server running at PORT: ", port);
  })
  .on("error", (error: Error) => {
    // gracefully handle error
    throw new Error(error.message);
  });
