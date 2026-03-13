const { users } = require('../Modules/userModules');

const getUser = (req, res) => {
    res.json(users);
};


module.exports = { getUser };