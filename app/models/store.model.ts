import * as mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter you store"],
    unique: true,
  },
});
storeSchema.plugin(uniqueValidator, {
  message: "Error, expected {PATH} to be unique.",
});

const StoreModel = mongoose.model("store", storeSchema);

export default StoreModel;
