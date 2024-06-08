import dotenv from "dotenv";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process
  throw new Error("Couldn't find .env file");
}

export default {
  databaseUrl: process.env.DATABASE_URL,
  tokenSecret: process.env.TOKEN_SECRET,
  port: process.env.PORT,
};
