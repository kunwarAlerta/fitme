"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassportLocal = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_jwt_1 = require("passport-jwt");
const user_model_1 = __importDefault(require("../models/user.model"));
const opts = {};
opts.jwtFromRequest = passport_jwt_1.ExtractJwt.fromAuthHeaderWithScheme("jwt");
opts.secretOrKey = process.env.SECRET_KEY;
class PassportLocal {
    static passportHandler(passport) {
        passport.use(new passport_jwt_1.Strategy(opts, (jwt_payload, done) => {
            user_model_1.default.findById(jwt_payload._id)
                .then((data) => {
                if (data) {
                    console.log(data);
                    return done(null, data);
                }
                return done(null, false);
            })
                .catch((err) => console.log(err));
        }));
    }
    static checkIfLogin() {
        return passport_1.default.authenticate("jwt", { session: false });
    }
}
exports.PassportLocal = PassportLocal;
