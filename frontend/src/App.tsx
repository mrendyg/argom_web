import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Catalogue from "./pages/Catalogue";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='Catalogo/' element={<Catalogue />} />
          <Route path='Sobre Nosotros' element={<AboutUs />} />
          <Route path='Contacto' element={<Contact />} />
          </Route>
        </Routes>
    </BrowserRouter>
  )
}


export default App;