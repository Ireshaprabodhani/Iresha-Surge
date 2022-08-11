const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const studentRoutes = require('./routes/studentRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');


const app = express(); 
dotenv.config(); 
connectDB();
app.use(express.json());


app.get("/", (req, res) => {
  res.send("API is running");
});

app.use('/api/student',studentRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`Server Started on port ${PORT}..`));
