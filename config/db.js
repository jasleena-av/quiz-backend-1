const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
   
  }
};

module.exports = connectionDB;
