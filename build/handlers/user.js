"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const users_1 = require("../data/users");
const signup = (req, res) => {
    const { username, password } = req.body;
    if (!(username === null || username === void 0 ? void 0 : username.trim()) || !(password === null || password === void 0 ? void 0 : password.trim())) {
        return res.status(400).send("Bad username or password");
    }
    users_1.addUser({ username, password });
    res.status(201).send("User created");
};
exports.signup = signup;
