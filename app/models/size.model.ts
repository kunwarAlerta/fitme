import * as mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const sizeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter you size"],
    unique: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
});
sizeSchema.plugin(uniqueValidator, {
  message: "Error, expected {PATH} to be unique.",
});

const SizeModel = mongoose.model("size", sizeSchema);

export default SizeModel;
