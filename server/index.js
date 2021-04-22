const express = require("express");
const app = new express();
const dotenv = require("dotenv").config();
const path = require("path");
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port: ${process.env.PORT}`);
});
