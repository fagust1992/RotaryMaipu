import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../layout/general/Header";
import useForm from "../../hooks/useForm";

export const Login = () => {
  const initialValues = { email: "", password: "" };
  const { formValues, isSubmitting, handleChange, handleSubmit } = useForm(initialValues, 'login');
  const navigate = useNavigate();
  
  useEffect(() => {
    // Function to check token and redirect if needed
    const checkToken = () => {
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        // If token exists, redirect to /perfil
        navigate("/perfil");
      }
    };

    checkToken(); // Call the function to check token and redirect
  }, [navigate]);

  return (
    <div>
      <Header />
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
