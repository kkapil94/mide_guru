import express from "express";
import { createGraphqlServer } from "./graphql/index.js";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors"
import 'dotenv/config'
import { connectDB } from "./utils/db.js";

async function init() {
  const app = express();
  const PORT = process.env.PORT || 4000;

  connectDB()
  app.use(express.json())
  app.use(cors())
  app.use("/graphql", expressMiddleware(await createGraphqlServer()));

  app.listen(PORT, () => {
    console.log("server listening at port" + PORT);
  });
}

init();
