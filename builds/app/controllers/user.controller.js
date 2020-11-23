"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const helper_1 = require("../helper/helper");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class UserController {
    signUp(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield jsonwebtoken_1.default.sign(params, process.env.ACTIVATIONKEY || "", {
                expiresIn: "20m",
            });
            var emailexist = yield user_model_1.default.findOne({ email: params.email });
            if (emailexist) {
                throw "Email address already exists";
            }
            yield this.sendVerificationEmail(params, token);
        });
    }
    signIn(params) {
        return __awaiter(this, void 0, void 0, function* () {
            var data = yield user_model_1.default.findOne({ email: params.email });
            if (!data) {
                throw "Email address doesnot exists";
            }
            var user = yield helper_1.Helper.compareEncHash(params.password, data.password);
            if (!user) {
                throw "Incorrect password";
            }
            const token = yield jsonwebtoken_1.default.sign(user, process.env.ACTIVATIONKEY || "");
            return token;
        });
    }
    verifyEmail(token) {
        return __awaiter(this, void 0, void 0, function* () {
            var decodedtoken = yield jsonwebtoken_1.default.verify(token, process.env.ACTIVATIONKEY || "");
            if (decodedtoken) {
                const userModel = new user_model_1.default(decodedtoken);
                yield userModel.save();
            }
        });
    }
    sendVerificationEmail(params, token) {
        return __awaiter(this, void 0, void 0, function* () {
            yield helper_1.Helper.sendEmail(params, token);
        });
    }
}
exports.UserController = UserController;
