import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../layout/general/Header";
import useForm from "../../hooks/useForm";

export const Login = () => {
  const initialValues = { email: "", password: "" };
  const { formValues, isSubmitting, handleChange, handleSubmit, saved } = useForm(initialValues, 'login');
  const [valor, setValor] = useState("");
  const navigate = useNavigate();
  
 




  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setValor(token);
      // Defer navigation to avoid causing an infinite loop
      setTimeout(() => {
        navigate("/perfil");
      }, 0);
    } else {
      setValor("Sin Loguearse");
    }
  }, [navigate]);

  return (
    <div>
      <Header />
      <h4>{valor}</h4>
      <div className="content_post">
        <form className="form-login" onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
};

export default Login;
