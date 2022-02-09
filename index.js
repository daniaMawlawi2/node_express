var express = require("express");
var morgan = require("morgan");
var dishRouter = require("./routes/dishRouter");
var promoRouter = require("./routes/promoRouter");
var leaderRouter = require("./routes/leaderRouter");

var hostname = "localhost";
var port = 3000;
var app = express();

app.use(morgan("dev"));

app.use("/dishes", dishRouter);
app.use("/promotions", promoRouter);
app.use("/leadership", leaderRouter);

app.listen(port, hostname, function () {
  console.log(`Server runningt at http://${hostname}:${port}/`);
});
