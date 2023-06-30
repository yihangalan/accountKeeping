import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from "./pages/Home";
import App from "./App";
import {AuthContextProvider} from "./context/authContext";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <AuthContextProvider>
          <App />
      </AuthContextProvider>
  </React.StrictMode>,
)
