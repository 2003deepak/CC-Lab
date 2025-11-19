const express = require("express");
const app = express();
const PORT = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello !");
});

app.get("/goodmorning", (req, res) => {
  res.send("Good Morning from deepak!");
});

app.get("/done", (req, res) => {
  res.send("Thank You mam");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
