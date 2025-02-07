import { Schema, model } from "mongoose";

const messageSchema = new Schema({
  remitente_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  destinatario_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  contenido: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
});

export default model("Message", messageSchema);
