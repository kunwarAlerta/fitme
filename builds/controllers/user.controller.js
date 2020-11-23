"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    signIn(req, res, next) {
        res.send("Welcome");
    }
    signUp(req, res, next) {
        res.send("Welcome");
    }
}
exports.User = User;
