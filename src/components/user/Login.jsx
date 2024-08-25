import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../layout/general/Header";
import useForm from "../../hooks/useForm";
import { AuthContext } from "../../context/AuthProvider";

export const Login = () => {
  const initialValues = { email: "", password: "" };
  const { formValues, isSubmitting, handleChange, handleSubmit } = useForm(
    initialValues,
    "login"
  );
  const { auth, getProfile } = useContext(AuthContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.id) { 
      setIsLoggedIn(true);
    }
  }, [auth]); // Escucha los cambios en `auth` para actualizar `isLoggedIn`

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await handleSubmit(e);
    await getProfile(); // Obtener el perfil del usuario después del envío del formulario
  };

  const goToProfile = () => {
    navigate("/perfil");
  };

  return (
    <div>
      <Header />
      <div className="content_post">
        <form className="form-login" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
              disabled={isSubmitting}
            />
          </div>
          <input
            type="submit"
            value="Identificate"
            className="btn btn-success"
            disabled={isSubmitting}
          />
        </form>

        {isLoggedIn && (
          <div className="login-success">
            <p>Fuiste logueado con éxito</p>
            <button onClick={goToProfile} className="btn btn-primary">
              Ir a mi perfil
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
