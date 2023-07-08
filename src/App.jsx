import { useState } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {

  return (
      <Routes>
        <Route path={'/'} element={<Home/>} />
      </Routes>
  )
}

export default App
