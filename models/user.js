import { Schema, model } from "mongoose";

const userSchema = new Schema({
  nombre: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  rol: {
    type: String,
    enum: ["estudiante", "propietario", "admin"],
    required: true,
  },
  fecha_registro: { type: Date, default: Date.now },
});

export default model("User", userSchema);
