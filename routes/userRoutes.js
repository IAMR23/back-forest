import { Router } from "express";
import user from "../models/user";
const router = Router();

// Crear un usuario
router.post("/", async (req, res) => {
  const { nombre, correo, contraseña, rol } = req.body;
  const user = new user({ nombre, correo, contraseña, rol });
  await user.save();
  res.status(201).send(user);
});

// Obtener todos los usuarios
router.get("/", async (req, res) => {
  const users = await find();
  res.send(users);
});

export default router;
