const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

const Router = require('./routes/index');

app.use("/api", Router);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log("Server is running....");
});
