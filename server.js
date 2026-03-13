
const express = require('express');
const app = express();

const userRoutes = require('./Routes/userRoutes');

app.use('/', userRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// app.get('/users/:userid', (req, res) => {
//     const userid = req.params.userid;
//     res.json({ message: " Homme Page Done", userid: userid });
// });
// app.get('/about', (req, res) => {
//     res.send('This is the about page');
// });
// app.get('/contact', (req, res) => {
//     res.send('This is the contact page');
// });
