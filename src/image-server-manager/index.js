require("dotenv").config();
const express = require('express');
const appRoute = require("./routes/appRoute");

const app = express();
const PORT = process.env.PORT || 5000;

app.use("/api", appRoute);

app.listen(PORT, () => console.log(`listening on port : ${PORT}`));