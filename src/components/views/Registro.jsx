import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
// import { iniciarSesion } from "../../helpers/queries";
// import { useNavigate } from "react-router-dom";

const Registro = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  // const navegacion = useNavigate();

  const onSubmit = (registroUsuario) => {
    console.log(registroUsuario);
    // then implica lo siguiente: yo ejecutare una funcion, una vez que se ejecute iniciar sesion, espera que se ejecute y entonces, realiza lo siguiente
    // respuesta es una variable inventada que va a contener el return de "inciarSesion"
    Swal.fire(
      "Usuario creado correctamente",
      "Inicie sesion para disfrutar.",
      "success"
    );
    reset();
  };

  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center">Registro</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {...register("nombreUsuario", {
                  required: "El nombre de usuario es un dato obligatorio",
                  // expresion regular
                  pattern: {
                    value: /^[a-zA-Z0-9]{6,16}$/,
                    message: `La contraseña debe tener al menos entre 8 y 16 caracteres, NO admite caracteres especiales.`,
                  },
                })}
              />
              <Form.Text className="text-danger">
                {/*  */}
                {errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                placeholder="Ingrese un email"
                type="email"
                {...register("email", {
                  required: "El email es un dato obligatorio",
                  // expresion regular
                  pattern: {
                    value:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                    message:
                      "El email debe tener el siguiente formato: 'mail@dominio.com'",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {/*  */}
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "El password es obligatorio",
                  pattern: {
                    value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
                    message: `La contraseña debe tener al menos entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula.
                 NO puede tener otros símbolos.`,
                  },
                })}
              />
              <Form.Text className="text-danger">
                {/*  */}
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <div className="row">
              <Button
                className="btn btn-dark btn-lg btn-block mb-2"
                type="submit"
              >
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
