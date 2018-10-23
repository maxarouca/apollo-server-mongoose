import mongoose from "mongoose";

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: { type: String },
  age: { type: Number },
}, { collection: "authors" });


const Author = mongoose.models.Author || mongoose.model("Author", authorSchema);

module.exports = Author;