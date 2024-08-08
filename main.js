import express from "express";
import path from "path";
import dotenv from "dotenv/config";
import { fileURLToPath } from "url";

//Launch express app
const app = express();

//config render template engine - PUG
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

//config static directory
app.use(express.static(path.join(__dirname, "statics")));

//endpoints
app.get("/", (req, res) => {
  res.render("index", { title: "My express app" });
});

//config express server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
