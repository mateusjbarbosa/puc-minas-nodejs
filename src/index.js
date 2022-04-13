import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send("<h1>Mateus José Barbosa</h1>");
});

app.listen(3000, () => {
  console.log("server running at :3000");
});
