const { users } = require('../Modules/userModules');

const getUser = (req, res) => {
    res.json(users);
};

const addUser = (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        data: req.body
    });
};

const getUserById = (req, res) => {
    const userid = parseInt(req.params.id);
    const name = req.query.name;

    console.log(req.headers);
    console.log(name);
    console.log(userid);

    const user = users.find(u => u.id === userid);

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "User not found"
        });
    }

    res.json({
        success: true,
        data: user
    });
};

module.exports = { getUser, addUser, getUserById };