import React from 'react';
import './App.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navigation from "./layout/Navigation";

function App() {
  return (
   <BrowserRouter>
    <Navigation/>
       <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/login' element={<Login/>} />
       </Routes>
   </BrowserRouter>
  );
}

export default App;
