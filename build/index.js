"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const routes_1 = require("./routes");
const app = express_1.default();
const PORT = 3000;
app.use(body_parser_1.default.urlencoded({ extended: false }));
routes_1.routes.forEach((route) => {
    const { method, path, middleware, handler } = route;
    app[method](path, ...middleware, handler);
});
app.listen(PORT, () => {
    console.log(`Express Typescript app @ http://localhost:${PORT}`);
});
