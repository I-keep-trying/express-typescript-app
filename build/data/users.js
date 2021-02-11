"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.addUser = void 0;
const users = [];
const addUser = (user) => {
    users.push(user);
};
exports.addUser = addUser;
const getUser = (user) => {
    return users.find((u) => u.username === user.username && u.password === user.password);
};
exports.getUser = getUser;
