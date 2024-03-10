import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../src/firebaseConfig";
import Login from './login.jsx';
import Deportistas from './deportistas.jsx';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Escucha los cambios en el estado de autenticación
    const unsubscribe = onAuthStateChanged(auth, validarUsuario => {
      setUser(validarUsuario); // currentUser será null si no hay usuario autenticado
    });

    // Limpiar el observador cuando el componente se desmonte
    return unsubscribe;
  }, []);

  // Decide qué componente renderizar basado en si hay un usuario autenticado
  if (user) {
    return <Deportistas />;
  } else {
    return <Login />;
  }
}

export default App;