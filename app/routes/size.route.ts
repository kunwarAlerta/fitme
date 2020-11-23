import express from "express";
import { Request, Response, NextFunction } from "express";
import SizeModel from "../models/size.model";
const route: express.Router = express.Router();

route.get("/get", getSizes);
route.post("/add", addSize);

function getSizes(req: Request, res: Response, next: NextFunction) {
  SizeModel.find({})
    .then((sizes) => {
      res.send({
        sizes,
      });
    })
    .catch(next);
}
function addSize(req: Request, res: Response, next: NextFunction) {
  const sizeModel = new SizeModel(req.body);
  sizeModel
    .save()
    .then(() => {
      res.send({
        message: "Sizes created successfully",
      });
    })
    .catch(next);
}

export default route;
