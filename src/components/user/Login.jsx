import React from "react";
import Header from "../layout/general/Header";

import useForm from "../../hooks/useForm"


export const Login = () => {


  const initialValues = { email: "", password: "" };
  const { formValues, isSubmitting, handleChange, handleSubmit,saved } = useForm(initialValues, 'login');

  return (
    <div>
      <Header />

      <h4>{saved}</h4>
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
