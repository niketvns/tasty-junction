import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import RestaurantDetails from "./pages/RestaurantDetails.jsx";

function App() {

  return (
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/restaurant-detail/:id'} element={<RestaurantDetails/>} />
      </Routes>
  )
}

export default App
