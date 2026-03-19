// let users = [
//     { id: 1, name: "Abhi" },
//     { id: 2, name: "Rahul" }
// ];

// exports.getUsers = (req, res) => {
//     try {
//         res.status(200).json({
//             success: true,
//             count: users.length,
//             data: users
//         });
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Error fetching users"
//         });
//     }
// };

// exports.addUsers = (req, res) => {
//     const students = req.body;
//     console,log(students);
//     res.json({
//         message: "User added successfully",
//         students,
//     });
// };

// exports.getUserById = (req, res) => {
//     const{ department, section} = req.params;
//     console.log(section);
//     console.log(department);

//     res.status(200).json({
//         user: user,
//         name: user.name,
//     });
//     res.send("User found");
//     res.redirect("/users");
// };

const { users } = require("../data/dummyData");

const getUsers = (req, res) => {
  res.json(users);
};

const addUser = (req, res) => {
  const { name } = req.body;
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.json(newUser);
};

module.exports = { getUsers, addUser };