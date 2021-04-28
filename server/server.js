const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/route");

require("dotenv").config();

//database setup
mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("local mongoDB server connected"))
  .catch((err) => console.log("error sujan", err));

const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());
// app.use(function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });

//router
app.use("/api", router);

app.listen(PORT, () => console.log("server loaded", PORT));
