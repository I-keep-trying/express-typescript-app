"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const users_1 = require("../data/users");
const login = (req, res) => {
    const { username, password } = req.body;
    const found = users_1.getUser({ username, password });
    if (!found) {
        return res.status(401).send("Login failed");
    }
    res.status(200).send("Success");
};
exports.login = login;
