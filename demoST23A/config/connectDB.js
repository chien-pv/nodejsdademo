const mongoose = require("mongoose");
function connectDB() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/demonode25")
    .then(() => console.log("Connected!"));
}

module.exports = connectDB;
