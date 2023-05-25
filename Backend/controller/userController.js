const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const userModel = require("../models/userModel");
// @desc Register new user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }

  //Check if user exists
  const userExists = await userModel.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //Create User
  const createUser = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });
  console.log(createUser);

  // if the user is created, send this object to the user or frontend to use
  if (createUser) {
    res.status(201).json({
      message: "User Created Successfully",
      _id: createUser.id,
      name: createUser.name,
      email: createUser.email,
      token: generateToken(createUser._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Authenticate a user
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  //Check for user email
  const userLogin = await userModel.findOne({ email });
  if (userLogin && (await bcrypt.compare(password, userLogin.password))) {
    res.json({
      _id: userLogin.id,
      name: userLogin.name,
      email: userLogin.email,
      token: generateToken(userLogin._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
});

// @desc Get user data
// @route GET /api/users/me
// @access Private
const getUserFromDatabase = asyncHandler(async (req, res) => {
  // when the user hits on their route, they should get their info...
  const { _id, name, email } = await userModel.findById(req.user.id);
  res.status(200).json({
    id: _id,
    name,
    email,
  });
});

// function to Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getUserFromDatabase,
};
