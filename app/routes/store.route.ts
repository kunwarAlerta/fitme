import express from "express";
import { Request, Response, NextFunction } from "express";
import StoreModel from "../models/store.model";
const route: express.Router = express.Router();

route.get("/get", getStores);
route.post("/add", addStore);

function getStores(req: Request, res: Response, next: NextFunction) {
  StoreModel.find({})
    .then((stores) => {
      res.send({
        stores,
      });
    })
    .catch(next);
}
function addStore(req: Request, res: Response, next: NextFunction) {
  const storeModel = new StoreModel(req.body);
  storeModel
    .save()
    .then(() => {
      res.send({
        message: "Stores created successfully",
      });
    })
    .catch(next);
}

export default route;
