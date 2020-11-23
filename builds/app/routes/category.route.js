"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const category_model_1 = __importDefault(require("../models/category.model"));
const route = express_1.default.Router();
route.get("/get", getCategories);
route.get("/add", addCategory);
function getCategories(req, res, next) {
    category_model_1.default.find({})
        .then((categories) => {
        res.send({
            categories,
        });
    })
        .catch(next);
}
function addCategory(req, res, next) {
    category_model_1.default.find({ name })
        .then((categories) => {
        res.send({
            categories,
        });
    })
        .catch(next);
}
exports.default = route;
