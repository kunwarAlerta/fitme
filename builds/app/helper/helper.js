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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
var bcrypt = require("bcryptjs");
var nodemailer = require("nodemailer");
class Helper {
    static generateEncHash(param) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10, function (err, salt) {
                err && reject(err);
                bcrypt.hash(param, salt, function (err, hash) {
                    err ? reject(err) : resolve(hash);
                });
            });
        });
    }
    static compareEncHash(param, comp) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(param, comp, function (err, isMatch) {
                err ? reject(err) : resolve(isMatch);
            });
        });
    }
    static sendEmail(user, token) {
        return __awaiter(this, void 0, void 0, function* () {
            var transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.SENDGRID_USERNAME,
                    pass: process.env.SENDGRID_PASSWORD,
                },
            });
            var mailOptions = {
                from: process.env.SENDGRID_USERNAME,
                to: user.email,
                subject: process.env.MAIL_SUBJECT,
                text: "Hello,\n\n" +
                    "Please verify your account by clicking the link: \n" +
                    process.env.HOSTNAME +
                    "verification/" +
                    token +
                    ".\n",
            };
            yield transporter.sendMail(mailOptions);
        });
    }
}
exports.Helper = Helper;
