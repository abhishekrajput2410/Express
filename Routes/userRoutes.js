const express = require("express");
const router = express.Router();
// const userController = require("../Controllers/userController");

// const {
//   getUser,
//   addUser,
//   getUserById
// } = require("../Controllers/userController");

// router.get("/users", getUser);

// router.get("/users/:id", getUserById);

// router.post("/users", addUser);

// router.get("/users", userController.getUser);
// router.post("/users", userController.addUser);

// router
// .route("/users")
// .get(userController.getUsers)
// .post(userController.addUsers);

// router.get("/users/:userId", userController.getUsers);
// module.exports = router;


const { getUsers, addUser } = require("../Controllers/userController");

router.get("/", getUsers);
router.post("/", addUser);

module.exports = router;