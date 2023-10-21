const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(express.static("uploads")); // Untuk mengakses file foto

app.use("/", require("./routes/route"));

app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
});
