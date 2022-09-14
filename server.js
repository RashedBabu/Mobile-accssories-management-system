const express = require("express");
require("dotenv").config();
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const path = require("path");
const authRoutes = require("./routes/auth");
const displayRoutes = require("./routes/display");
const batteryRoutes = require("./routes/battery");
const touchRoutes = require("./routes/touch");
const lcdRoutes = require("./routes/lcd");
const { reset } = require("nodemon");

// midleware
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());
// app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/display", displayRoutes);
app.use("/api/battery", batteryRoutes);
app.use("/api/touch", touchRoutes);
app.use("/api/lcd", lcdRoutes);

connectDB();

const PORT = process.env.PORT || 5000;
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/client/build/")));
//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
