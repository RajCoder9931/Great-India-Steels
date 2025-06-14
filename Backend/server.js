// const express = require("express");
// const mongoose = require("mongoose");
// const path = require('path');
// const cors = require("cors");
// require("dotenv").config();

// const contactRoutes = require("./routes/contactRoutes");
// const quoteRoutes = require("./routes/quoteRoutes");

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());

// app.use(express.json()); // to parse JSON

// app.use("/api/contact", contactRoutes);
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use('/api/quotes', quoteRoutes);
// app.use(express.json()); // to parse JSON data

// app.use("/api/contact", contactRoutes);

// // Root route for testing
// app.get("/", (req, res) => {
//   res.send("Great India Steel backend is running!");
// });


// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log("MongoDB connection error:", err));

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");


require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const quoteRoutes = require("./routes/quoteRoutes");
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(express.json()); // Add only once

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/quotes", quoteRoutes);
app.use('/api/auth', authRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Root route
app.get("/", (req, res) => {
  res.send("Great India Steel backend is running!");
});

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error:", err));

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
