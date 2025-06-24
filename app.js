import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/contact";
import Error from "./src/components/Error";
import ResMenu from "./src/components/ResMenu";
import Login from "./src/components/Login";
import Signup from "./src/components/Signup";
import { AuthProvider } from "./src/context/AuthContext";

const AppLayout = ()=>{

    return <div className="app-layout">
        <Header/>
        <Outlet/>
    </div>
}


const appRouter  = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children: [
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/restaurant/:resId",
                element:<ResMenu/>,
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/signup",
                element:<Signup/>
            }
        ],
        errorElement:<Error/>,
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <AuthProvider>
        <RouterProvider router={appRouter}/>
    </AuthProvider>
)