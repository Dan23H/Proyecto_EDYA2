import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, SignIn, Home, Mensajes, SubirImagen, Notification, Perfil, EditarPerfil, Image } from "./pages";

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/mensajeria" element={<Mensajes />} />
      <Route path="/subir-imagen" element={<SubirImagen />} />
      <Route path="/notificaciones" element={<Notification/>}/>
      <Route path="/perfil" element={<Perfil />}/>
      <Route path="/editar-perfil" element={<EditarPerfil/>}/>
      <Route path="/image" element={<Image/>}/>
    </Routes>
  );
};

export default App;