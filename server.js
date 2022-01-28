const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.listen(port, () => {
  console.log(`server ta rodando na porta: ${port}`);
});

const distDir = path.join(__dirname, "dist");
const htmlFile = path.join(distDir, "./public/index.html");

app.use(express.static("public"));
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(htmlFile, (error) => {
    if (error) res.status(500).send(error);
  });
});