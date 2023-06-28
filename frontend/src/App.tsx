import './App.css'
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>
            <Navbar></Navbar>
            <Home/>
            <Footer></Footer>
            </div>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
