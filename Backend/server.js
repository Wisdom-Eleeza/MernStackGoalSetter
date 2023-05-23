//entering point
const express = require("express");
const { errorHandler } = require('./middleware/errorMiddleware')
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes middleware
app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));
