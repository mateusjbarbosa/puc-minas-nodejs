import express from "express";
import {rotasDeProduto} from "./routes.js";

const app = express();

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("<h1>Mateus José Barbosa</h1>");
});

rotasDeProduto(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server running...`);
});
