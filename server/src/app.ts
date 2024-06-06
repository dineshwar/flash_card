import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

app.get("/login", (req: Request, res: Response) => {
  res.status(200).send("Hello World");
});

app.get("/signup", (req: Request, res: Response) => {
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
