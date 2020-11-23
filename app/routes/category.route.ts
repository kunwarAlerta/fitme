import express from "express";
import { Request, Response, NextFunction } from "express";
import CategoryModel from "../models/category.model";
const route: express.Router = express.Router();

route.get("/get", getCategories);
route.get("/add", addCategory);

function getCategories(req: Request, res: Response, next: NextFunction) {
  CategoryModel.find({})
    .then((categories) => {
      res.send({
        categories,
      });
    })
    .catch(next);
}
function addCategory(req: Request, res: Response, next: NextFunction) {
  CategoryModel.find({ name })
    .then((categories) => {
      res.send({
        categories,
      });
    })
    .catch(next);
}

export default route;
