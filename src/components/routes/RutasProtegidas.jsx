/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

// Children son las rutas que voy a proteger
const RutasProtegidas = ({children}) => {
    // Logica que quiero averiguar
    const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario")) || null;
    if (!usuarioLogueado) {
        // Nagite es un componente de RouterDom para rutas protegidas
        return <Navigate to="/login" ></Navigate>
    }else{
        // Si el usuaroi esta logeado, puede viajar a los children o rutas protegidas
        return children;
    }
};

export default RutasProtegidas;