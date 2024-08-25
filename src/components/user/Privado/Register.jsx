import React from "react";

import useForm from "../../../hooks/useForm";
import "../../../assets/styles/register-form.css"
import PrivateHeader from "../../layout/Privado/Privateheader";


export const Register = () => {

  const initialValues = {
    name: "",
    surname: "",
    nick: "",
    email: "",
    password: "",
  };

  const { formValues, isSubmitting, handleChange, handleSubmit } = useForm(
    initialValues,
    "register"
  );

  return (
    <>
   <PrivateHeader/>
<h6 className="text-center">Bienvenido a la seccion de registrar un Socio en Rotary Cludn Maipu</h6>
      <div className="content_post">
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              name="name"
              value={formValues.name}
              onChange={handleChange}
              id="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="surname">Apellidos</label>
            <input
              type="text"
              name="surname"
              value={formValues.surname}
              onChange={handleChange}
              id="surname"
            />
          </div>

          <div className="form-group">
            <label htmlFor="nick">Nick</label>
            <input
              type="text"
              name="nick"
              value={formValues.nick}
              onChange={handleChange}
              id="nick"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              id="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              id="password"
            />
          </div>

          <input
            type="submit"
            value="Regístrate"
            className="btn btn-success"
            disabled={isSubmitting}
          />
        </form>
      </div>
    </>
  );
};
