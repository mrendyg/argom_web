import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import React from "react";
import Layout from "./components/Layout";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}


export default App;