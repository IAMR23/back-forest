import { Schema, model } from "mongoose";

const reviewSchema = new Schema({
  propiedad_id: {
    type: Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  estudiante_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  calificación: { type: Number, required: true, min: 1, max: 5 },
  comentario: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
});

export default model("Review", reviewSchema);
