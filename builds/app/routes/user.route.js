"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controllers/user.controller");
const route = express_1.default.Router();
const userController = new user_controller_1.UserController();
route.post("/signup", signupRequest);
route.post("/signin", signinRequest);
route.get("/confirmation/:token", confirmation);
function signupRequest(req, res, next) {
    userController
        .signUp(req.body)
        .then(() => {
        res.send({
            message: "Please check your email for verification...",
        });
    })
        .catch(next);
}
function signinRequest(req, res, next) {
    userController
        .signIn(req.body)
        .then((token) => {
        res.send({
            token,
        });
    })
        .catch(next);
}
function confirmation(req, res, next) {
    userController
        .verifyEmail(req.params.token)
        .then(() => res.send({
        message: "Email verification done..you can signin now.. ",
    }))
        .catch(next);
}
exports.default = route;
