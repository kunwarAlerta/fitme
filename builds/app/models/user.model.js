"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mongoose = __importStar(require("mongoose"));
const mongoose_unique_validator_1 = __importDefault(require("mongoose-unique-validator"));
const helper_1 = require("../helper/helper");
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Enter you username"],
    },
    email: {
        type: String,
        required: [true, "Enter you email"],
        unique: [true, "Please enter a valid email"],
    },
    emailVerified: {
        type: Boolean,
        default: true,
    },
    size: {
        type: String,
        default: "",
    },
    password: {
        type: String,
        required: [true, "Enter you password"],
    },
});
userSchema.plugin(mongoose_unique_validator_1.default, {
    message: "Error, expected {PATH} to be unique.",
});
userSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        var user = this;
        var encPass = yield helper_1.Helper.generateEncHash(user.password);
        user.password = encPass;
        next();
    });
});
const UserModel = mongoose.model("user", userSchema);
exports.default = UserModel;
