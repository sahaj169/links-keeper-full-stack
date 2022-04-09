const express = require("express")
const userRouter = express.Router();
const { addUser, getUser,loginUser } = require("../controllers/user")


// @route GET /api/getUser
// @desc get user info
// @access Public
userRouter.get("/getUser/:username", getUser);

// @route POST /api/getUser
// @desc Post user info
// @access Public
userRouter.post("/addUser",addUser);
userRouter.post("/loginUser",loginUser);

module.exports = userRouter;