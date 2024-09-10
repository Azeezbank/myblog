import React from "react";
import "./App.css";
import Home from "./Components/Home";
import AllPost from "./Components/AllPost";
import PostDetail from "./Components/PostDetail";
import Login from "./Components/Login";
import Editpost from "./Components/Editpost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./Components/Contact";
import Restaurant from "./Components/Restaurant";
import Scrow from "./Components/Scrow";

function App() {
  return (
    <>
      <BrowserRouter>
        <Scrow />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AllPost" element={<AllPost />} />
          <Route path="/PostDetail/:id" element={<PostDetail />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Editpost/:id" element={<Editpost />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Restaurant" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
