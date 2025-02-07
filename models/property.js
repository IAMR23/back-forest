import { Schema, model } from "mongoose";

const propertySchema = new Schema({
  nombre: { type: String, required: true },
  descripción: { type: String, required: true },
  precio: { type: Number, required: true },
  ubicación: { type: String, required: true },
  características: { type: [String], required: true },
});

export default model("Property", propertySchema);
