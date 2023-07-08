import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {RestaurantsProvider} from "./contexts/restaurantsContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <RestaurantsProvider>
              <App />
          </RestaurantsProvider>
      </BrowserRouter>
  </React.StrictMode>,
)
