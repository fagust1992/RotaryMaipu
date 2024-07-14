import { useState } from "react";
import { Global } from "../helpers/Global";

const useRegisterForm = (initialValues, submitType) => {
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [saved, setSaved] = useState("Sin Loguearse"); // estaod de loguease

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const saveUser = async () => {
    try {
      const newUser = formValues;

      const request = await fetch(Global.url + "user/register", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: { "Content-Type": "application/json" },
      });
      const data = await request.json();
      console.log(data);
      setSaved(data.status === "success" ? "registered" : "error");
    } catch (error) {
      console.error("Error al registrar usuario:", error);
      setSaved("error");
    }
  };

  const loginUser = async () => {
    try {
      const userCredentials = formValues;
      const request = await fetch(Global.url + "user/login", {
        method: "POST",
        body: JSON.stringify(userCredentials),
        headers: { "Content-Type": "application/json" },
      });
      const data = await request.json();
      console.log(data);
      if (data.status === "success") {
        setSaved("logueado");
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Aquí puedes guardar la información del usuario si es necesario
        // localStorage.setItem('user', JSON.stringify(data.user));
      } else {
        setSaved("error");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setSaved("error");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (submitType === "register") {
      await saveUser();
    } else if (submitType === "login") {
      await loginUser();
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return {
    formValues,
    isSubmitting,

    handleChange,
    handleSubmit,
    saved,
  };
};

export default useRegisterForm;
