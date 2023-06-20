import { Route, Routes } from "react-router-dom";
import Administrador from "../views/Administrador";
import CrearProducto from "../views/producto/CrearProducto";
import EditarProducto from "../views/producto/EditarProducto";

const RutasAdministrador = () => {
  return (
    <Routes>
      <Route
        // El "*" sigifica que aqui van más palabras
        path="/"
        element={<Administrador></Administrador>}
      ></Route>
      <Route
        exact
        path="/crear-producto"
        element={<CrearProducto></CrearProducto>}
      ></Route>
      <Route
        exact
        path="/editar-producto/:id"
        element={<EditarProducto></EditarProducto>}
      ></Route>
    </Routes>
  );
};

export default RutasAdministrador;
