const express = require("express");
require("dotenv").config();
const cors = require("cors");
const corsOptions = {
  origin: "*",
  optionSuccessStatus: 200
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());


// Mouting routers
const testRouter = require("./routes/test.routes");
app.use("/api/v1/quiz", testRouter);

// Start server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});