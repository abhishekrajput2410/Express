 require('dotenv').config();
    const jwt = require('jsonwebtoken');
    const jwtToken = process.env.JWT_TOKEN;

exports.generateToken = (req, res) => {
    const { userName, email } = req.body;
    const token = jwt.sign({userName, email}, jwtToken);
    res.json({ token });
};