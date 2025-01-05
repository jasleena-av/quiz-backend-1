require("dotenv").config();
const express = require("express");
const connectionDB = require("./config/db.js");
const cors = require("cors");

const app = express();
connectionDB()

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/routes.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
