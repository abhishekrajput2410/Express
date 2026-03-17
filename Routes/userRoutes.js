const express = require("express");
const router = express.Router();

const {
  getUser,
  addUser,
  getUserById
} = require("../Controllers/userController");


router.get("/users", getUser);

router.get("/users/:id", getUserById);

router.post("/users", addUser);

module.exports = router;