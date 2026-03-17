const express = require('express');
const app = express();
const PORT = 5000;

require('dotenv').config({
    path: '.env.development'
});

app.use(express.json());

const userRoutes = require('./Routes/userRoutes');
app.use('/', userRoutes);

console.log(process.env.PORT);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});