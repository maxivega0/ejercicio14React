// Todas las cosultas las llamamos desde acá
// Llamar una variable de entorno
const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_producto = import.meta.env.VITE_API_PRODUCTOS;

// const URL_productos = import.meta.env.VITE_API_PRODUCTOS

/*
    GET = devuelve lista de elementos o un elemento
    POST me permiten crear un elemento
    PUT / PATCH me permiten editar un elemento, si solo quiero cambiar un dato utilizo patch
    DELETE me permite eliminar un elemento o lista de elementos
*/

// recibo un objeto usuario
export const iniciarSesion = async (usuario) => {
  try {
    const respuesta = await fetch(URL_usuario);
    const listaUsuarios = await respuesta.json();
    const usuarioBuscado = listaUsuarios.find(
      (itemUsuario) => itemUsuario.email === usuario.email
    );
    if (usuarioBuscado) {
      // email correcto
      if (usuarioBuscado.password === usuario.password) {
        return usuarioBuscado;
      } else {
        console.log("password incorrecto");
        // password incorecto
      }
      // el mail es correcto
    } else {
      console.log("el email no existe");
      // El mail no existe
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const obtenerListaProductos = async () => {
  try {
    // Cuando vea que en una peticion fetch hay un solo argumento, es xq es una peticion GET
    const respuesta = await fetch(URL_producto);
    // console.log(respuesta);
    const listaProductos = await respuesta.json();
    return listaProductos;
  }catch (error) {
    console.log(error)
  }
}

// peticion post para agregar un producto a una api
export const crearProducto = async (producto) => {
  try {
    // Una peticion post necesita un 2do argumento, sera el metodo que elegí
    const respuesta = await fetch(URL_producto, {
      method: "POST",
      headers: {
        // Lineas en formato JSON
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta; // el status de la respuesta es 201
  } catch (error) {
    console.log(error);
  }
};
export const editarProducto = async (producto, id) => {
  try {
    // Una peticion post necesita un 2do argumento, sera el metodo que elegí
    const respuesta = await fetch(URL_producto + "/" + id, {
      method: "PUT",
      headers: {
        // Lineas en formato JSON
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    });
    return respuesta; // el status de la respuesta es 200
  } catch (error) {
    console.log(error);
  }
};
export const producto = async (id) => {
  try {
    // Una peticion post necesita un 2do argumento, sera el metodo que elegí
    const respuesta = await fetch(URL_producto + "/" + id, {
      method: "DELETE",
    });
    return respuesta; // el status de la respuesta es 200
  } catch (error) {
    console.log(error);
  }
};

export const obtenerProducto = async (id) => {
  try {
    // Cuando vea que en una peticion fetch hay un solo argumento, es xq es una peticion GET
    const respuesta = await fetch(URL_producto + "/" + id);
    // console.log(respuesta);
    const producto = await respuesta.json();
    return producto; // voy a retornar un objeto producto
  } catch (error) {
    console.log(error);
  }
};
