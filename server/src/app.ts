import config from "@config/index";
import express from "express";

async function startServer() {
  const app = express();
  await require("@loaders/express").default({ app: app });
  app
    .listen(config.port, () => {
      console.log(`Server running in port: ${config.port}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit(1);
    });
}

startServer();
