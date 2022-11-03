import express from "express";
import mongoose from "mongoose";
import { APP_PORT, DB_URL } from "./config";

const app = express();
import routes from "./routes";

mongoose.connect(DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.listen(APP_PORT, () => {
  console.log(`Server is running on port ${APP_PORT}`);
});
