//* controlador para ciudadano este es el encargado de escuchar y responder las
//* peticiones
import { CiudadanoModel } from "../Models/ciudadano.model.js";

export const getCiudadanos = async (req, res) => {
  // codigo protegido con try catch
  try {
    const results = await CiudadanoModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar los ciudadanos",
    });
  }
};
// buscar ciudadano por paramentro id
export const getCiudadanoById = async (req, res) => {
  // codigo protegido con try catch
  try {
    const results = await CiudadanoModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al buscar los ciudadanos",
    });
  }
};
// insertar un registro
export const CreateCiudadano = async (req, res) => {
  // codigo protegido con try catch
  const data = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    apodo: req.body.apodo,
    fecha_nacimiento: req.body.fecha_nacimiento,
    planeta_origen: req.body.planeta_origen,
    planeta_residencia: req.body.planeta_residencia,
    foto: req.body.foto,
    codio_qr: req.body.codio_qr,
    estado: req.body.estado,
  };
  try {
    const results = await CiudadanoModel.create(data);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al Agregar los ciudadanos",
    });
  }
};
// borrar ciudadano(caso parendizaje en caso real se camia el estado a inactivo)
export const deleteCiudadano = async (req, res) => {
  // codigo protegido con try catch
  try {
    const results = await CiudadanoModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al borrar los ciudadanos",
    });
  }
};
export const UpdateCiudadano = async (req, res) => {
  // codigo protegido con try catch
  const data = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    apodo: req.body.apodo,
    fecha_nacimiento: req.body.fecha_nacimiento,
    planeta_origen: req.body.planeta_origen,
    planeta_residencia: req.body.planeta_residencia,
    foto: req.body.foto,
    codio_qr: req.body.codio_qr,
    estado: req.body.estado,
  };
  try {
    const results = await CiudadanoModel.update(req.params.id, req.body);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error en la actualizacion los ciudadanos",
    });
  }
};