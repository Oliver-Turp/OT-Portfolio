const { config } = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const adminAuthRoutes = require("./routes/adminAuthRoutes");
const contentRoutes = require("./routes/contentRoutes");
const cors = require("cors");
const logger = require("./middleware/logger");
config();

async function startServer() {
  const app = express();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // setup cors. Basically, allow browsers make request to this server
  app.use(cors());

  app.use(logger);

  // handle crud operations on general user content
  app.use("/api/admin/content", contentRoutes);

  // says adminAuthRoutes should handle request for any route that begins with /api/admin/auth
  app.use("/api/admin/auth", adminAuthRoutes);

  // error handler
  app.use("*", (req, res) => {
    res.status(404).json({
      success: false,
      message: "Resource not found. You probably hit the wrong endpoint",
    });
  });

  const PORT = 5000;
  app.listen(PORT, () => console.log("Server listening on port: " + PORT));
}

function main() {
  // make connection with the database first. If that works, start the express server, other wise, try to connect again
  mongoose.connect(process.env.MONGO_URI, (err) => {
    if (!err) {
      console.log("Mongodb connected");
      startServer();
    } else {
      console.log("Couldn't connect to mongodb. Retrying...", err);
      main();
    }
  });
}

main();
