import {
  createBrowserRouter,
  RouterProvider,
  Outlet, 
} from "react-router-dom";

import "./style.scss"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Write from "./pages/Write"
import Home from "./pages/Home"
import Single from "./pages/Single"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"



const Layout = ()=> {
  return (
    <>
      <Navbar/>
      <Outlet />
      <Footer/>
    </>
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
        path: "/write",
        element: <Write/>,
      },
      {
        path: "/post/:id",
        element: <Single/>,
      },

    ]
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);


function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
