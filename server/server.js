const express = require("express");

const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/contact", (req, res) => {
  res.send("This is contact page.");
});

app.listen(5000, () => console.log("Server running on localhost:5000"));

