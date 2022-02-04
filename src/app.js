const express = require("express");
const mongoose = require("mongoose");
const logger = require("./helpers/loggers.js");
const morgan = require("morgan");
const routes = require("./routes/article");
const port = process.env.PORT || 8081;

//MongoDB options
const dbURI =
  "mongodb+srv://1234:1234@slowlyfood.knt6b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const dbOptions = { useNewUrlParser: true, useUnifiedTopology: true };

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(dbURI, dbOptions);
    logger.info("MongoDB connected!");
    app.listen(port, () => {
      logger.info(`Server is running!`);
    });
  } catch (err) {
    logger.info("Failed to connect to MongoDB", err);
  }
};

connectDB();

app.use(express.json());
app.use(morgan("combined"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});
app.use("/api", routes);

module.exports = app;
