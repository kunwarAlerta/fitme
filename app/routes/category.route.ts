import express from "express";
import { Request, Response, NextFunction } from "express";
import CategoryModel from "../models/category.model";
const route: express.Router = express.Router();

route.get("/get", getCategories);
route.post("/add", addCategory);

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
  const categoryModel = new CategoryModel(req.body);
  categoryModel
    .save()
    .then(() => {
      res.send({
        message: "Categories created successfully",
      });
    })
    .catch(next);
}

export default route;
