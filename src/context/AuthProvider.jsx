import { createContext, useState, useEffect } from "react";
import { Global } from "../helpers/Global";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      console.log("No token or user found in localStorage");
      return null;
    }

    const userObj = JSON.parse(user);

    const userId = userObj.id;

    try {
      const request = await fetch(Global.url + "user/profile/" + userId, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (!request.ok) {
        throw new Error(`Error en la solicitud: ${request.status}`);
      }

      const data = await request.json();

      setAuth(data.user); // Actualiza el estado de autenticación con el perfil del usuario
      return data.user; // Retorna los datos del usuario si es necesario
    } catch (error) {
      console.error("Error al obtener el perfil del usuario:", error);
      return null; // o maneja el error de otra manera según tu aplicación
    }
  };
  console.log(auth);
  return (
    <AuthContext.Provider value={{ auth, setAuth, getProfile }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
