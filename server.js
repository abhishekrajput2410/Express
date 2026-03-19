const express = require('express');
const app = express();

require('dotenv').config({
    path: '.env.development'
});

const PORT = process.env.PORT || 5000;

app.use(express.json());

const userRoutes = require('./Routes/userRoutes');
app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});