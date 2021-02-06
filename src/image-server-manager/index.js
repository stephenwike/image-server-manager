require("dotenv").config();
const express = require('express');
const appRoute = require("./routes/appRoute");

const app = express();
const PORT = process.env.PORT || 5000;
app.use("/api", appRoute);

app.get('/', (req, res) => {
  res.send(`TEST_CONFIG_VALUE: ${process.env.TEST_CONFIG_VALUE}`);
})

app.listen(PORT, () => console.log(`listening on port : ${PORT}`));