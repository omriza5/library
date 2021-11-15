const mongoose = require("mongoose");

module.exports = mongoose.connect(
  "mongodb+srv://omriza5:amosh100@cluster0.dql37.mongodb.net/library?retryWrites=true&w=majority",
  (err) => {
    if (err) console.log(err);
    console.log("Connected to mongoDB...");
  }
);
