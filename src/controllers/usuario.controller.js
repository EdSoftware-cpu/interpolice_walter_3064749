//* controlador para usuario este es el encargado de escuchar y responder las
//* peticiones
import { UsuarioModel } from "../Models/usuario.model.js";

export const getUsuario = async (req, res) => {
  // codigo protegido con try catch
  try {
    const results = await UsuarioModel.findAll();
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al listar los usuarios",
    });
  }
};
// buscar usuario por paramentro id
export const getUsuarioById = async (req, res) => {
  // codigo protegido con try catch
  try {
    const results = await UsuarioModel.findById(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al buscar los usuarios",
    });
  }
};
// insertar un registro
export const CreateUsuario = async (req, res) => {
  // codigo protegido con try catch
  const data = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    pass: req.body.pass,
    avatar: req.body.avatar,
    rol: req.body.rol,
  };
  try {
    const results = await UsuarioModel.create(data);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al Agregar los usuarios",
    });
  }
};
// borrar usuario(caso parendizaje en caso real se camia el estado a inactivo)
export const deleteUsuario = async (req, res) => {
  // codigo protegido con try catch
  try {
    const results = await UsuarioModel.delete(req.params.id);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error al borrar los usuarios",
    });
  }
};
export const UpdateUsuario = async (req, res) => {
  // codigo protegido con try catch
  const data = {
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    email: req.body.email,
    pass: req.body.pass,
    avatar: req.body.avatar,
    rol: req.body.rol,
  };
  try {
    const results = await UsuarioModel.update(req.params.id, data);
    res.json({ results });
  } catch (error) {
    res.status(500).json({
      error: "error en la actualizacion los usuarios",
    });
  }
};