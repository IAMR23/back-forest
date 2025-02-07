import { Schema, model } from "mongoose";

const publicationSchema = new Schema({
  propiedad_id: {
    type: Schema.Types.ObjectId,
    ref: "Property",
    required: true,
  },
  propietario_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  fecha_publicación: { type: Date, default: Date.now },
  estado: { type: String, enum: ["activo", "inactivo"], default: "activo" },
});

export default model("Publication", publicationSchema);
