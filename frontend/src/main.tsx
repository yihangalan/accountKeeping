import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./pages/Home";
import App from "./App";
import {AuthContextProvider} from "./context/authContext";
import {PopupContextProvider} from "./context/postContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <AuthContextProvider>
          <PopupContextProvider>
              <App />
          </PopupContextProvider>
      </AuthContextProvider>
  </React.StrictMode>,
)
