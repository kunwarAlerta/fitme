"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const route = express_1.default.Router();
const user = new user_controller_1.User();
route.post("/signin", user.signIn);
route.post("/signup", user.signUp);
exports.default = route;
