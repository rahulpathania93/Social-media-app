// controllers/userController.js
const { registerUser, loginUser } = require('../services/userService');

exports.signup = async(req, res) => {
    try {
        const { firstName, lastName, name, email, password, phone } = req.body;
        const user = await registerUser({ firstName, lastName, name, email, password, phone });
        res.json({ message: '---User registered successfully---', user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async(req, res) => {
    try {
        const { email, password } = req.body;
        const { token, user } = await loginUser(email, password);
        res.json({ message: '---Login successful---', token, user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};