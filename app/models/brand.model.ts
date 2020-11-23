import * as mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter you brand"],
    unique: true,
  },
});
brandSchema.plugin(uniqueValidator, {
  message: "Error, expected {PATH} to be unique.",
});

const BrandModel = mongoose.model("brand", brandSchema);

export default BrandModel;
