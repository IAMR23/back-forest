import { Router } from "express";
import property from "../models/property";
const router = Router();

// Crear una propiedad
router.post("/", async (req, res) => {
  const { nombre, descripción, precio, ubicación, características } = req.body;
  const property = new property({
    nombre,
    descripción,
    precio,
    ubicación,
    características,
  });
  await property.save();
  res.status(201).send(property);
});

// Obtener todas las propiedades
router.get("/", async (req, res) => {
  const properties = await find();
  res.send(properties);
});

export default router;
