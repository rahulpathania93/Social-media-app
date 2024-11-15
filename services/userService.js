// services/userService.js
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const registerUser = async(userData) => {
    const { firstName, lastName, name, email, password, phone } = userData;
    const user = new User({ firstName, lastName, name, email, password, phone });
    await user.save();
    return user;
};

const loginUser = async(email, password) => {
    const user = await User.findOne({ email });
    if (!user) throw new Error('User not found');
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) throw new Error('Invalid password');
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return { token, user };
};

module.exports = { registerUser, loginUser };