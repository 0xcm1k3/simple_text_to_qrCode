const express = require("express");
const qrRoute = require("./routes/qrRoute");
const cors = require("cors");

require("dotenv").config();
const app = express();

app.use(
  cors({
    origin: [
      `http://localhost:${process.env.PORT || "8000"}`,
      `https://localhost:${process.env.PORT || "8000"}`,
    ],
  })
);
app.use("/", express.static("./frontend"));

app.use("/api", qrRoute);
app.listen(process.env.PORT || 8000, () => {
  console.log(`listening on port ${process.env.PORT || "8000"}`);
});
