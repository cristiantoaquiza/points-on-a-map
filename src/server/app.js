import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { NODE_ENV } from "./config";
import express from "express";
import api from './routes'

const app = express();

app.use(cors(), bodyParser.urlencoded({ extended: true }), bodyParser.json());
app.use(api)

if (NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../../dist")));
  app.get("/", (request, response) => {
    response.sendFile(path.resolve("index.html"));
  });
}

export default app