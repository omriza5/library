const express = require("express");
const app = express();
const books = require("./routes/books.route");
const cors = require("cors");

/** DB Connection */
require("./db/mongoose.js");

app.use(cors());
app.use(express.json());
app.use("/api/books", books);

/** Server */
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Listening on port " + port);
});
