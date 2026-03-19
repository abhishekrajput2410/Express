const express = require('express');
const app = express();

// require('dotenv').config({
//     path: '.env.development'
// });

// const PORT = process.env.PORT || 5000;

// app.use(express.json());

// const userRoutes = require('./Routes/userRoutes');
// app.use('/', userRoutes);

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });


app.use(express.json());

// Import routes
const productRoutes = require("./Routes/productRoutes");
const userRoutes = require("./Routes/userRoutes");
const orderRoutes = require("./Routes/orderRoutes");


app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.get("/", (req, res) => {
  res.send("E-Commerce API Running 🚀");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});