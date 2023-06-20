import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/views/Error404";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Inicio from "./components/views/Inicio";
import Registro from "./components/views/Registro";
import Login from "./components/views/Login";
import DetalleProducto from "./components/views/DetalleProducto";
// import Administrador from "./components/views/Administrador";
// import CrearProducto from "./components/views/producto/CrearProducto";
// import EditarProducto from "./components/views/producto/EditarProducto";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //componentes para rutas
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdministrador from "./components/routes/RutasAdministrador";
// npm install --save sweetalert2 sweetalert2-react-content liberia sweetAlert
// npm install react-router-dom libreria cuando mi proyecto en react tiene muchas paginas
// npm install react-hook-form libreria para validacion de formularios rapidamente
// npm install -g json-server Instala en mi computadora de manera global para
// ciertos comandos, para simular una api local

function App() {
  const usuarioSessionStorage =
    JSON.parse(sessionStorage.getItem("usuario")) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuarioSessionStorage);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
        ></Route>
        <Route
          exact
          path="/detalle"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
        <Route
          // El "*" sigifica que aqui van más palabras
          path="/administrador/*"
          // dejamos pendiente que construir
          element={
            // RutasProtegidas contiene la logica de los childrens
            <RutasProtegidas>
              <RutasAdministrador></RutasAdministrador>
            </RutasProtegidas>
          }
        ></Route>
        <Route path="*" element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
