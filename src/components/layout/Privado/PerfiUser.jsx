import React from 'react'
import Profile from '../../../hooks/Profile'

export const PerfiUser = () => {
  const auth = Profile(); // Asegúrate de que el hook se llame Profile
  console.log(auth);
  return (
<>
<h3>estamos en perfil usuario construyendo pagina</h3>

</>
  )
}
