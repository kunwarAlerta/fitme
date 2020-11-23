import * as mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter you category"],
    unique: true,
  },
});
categorySchema.plugin(uniqueValidator, {
  message: "Error, expected {PATH} to be unique.",
});

const CategoryModel = mongoose.model("category", categorySchema);

export default CategoryModel;
