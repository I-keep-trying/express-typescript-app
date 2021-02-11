"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const auth_1 = require("./handlers/auth");
const home_1 = require("./handlers/home");
const user_1 = require("./handlers/user");
const requestLogger_1 = require("./middleware/requestLogger");
exports.routes = [
    {
        method: "get",
        path: "/",
        middleware: [],
        handler: home_1.home,
    },
    {
        method: "post",
        path: "/users",
        middleware: [],
        handler: user_1.signup,
    },
    {
        method: "post",
        path: "/login",
        middleware: [requestLogger_1.requestLogger],
        handler: auth_1.login,
    },
];
