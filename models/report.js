import { Schema, model } from "mongoose";

const reportSchema = new Schema({
  tipo: { type: String, required: true },
  descripción: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
});

export default model("Report", reportSchema);
