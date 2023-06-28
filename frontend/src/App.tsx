import './App.css'
import {createBrowserRouter, RouterProvider, Route, Outlet} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";

const Layout = () =>{
    return(
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <Footer></Footer>
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/profile/:id",
                element: <Profile/>,
            },
        ],
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
    <div className="app">
        <div className="container">
            <RouterProvider router={router}/>
        </div>
    </div>
  )
}

export default App

