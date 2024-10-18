import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/contact";
import Error from "./src/components/Error";
import ResMenu from "./src/components/ResMenu";

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
            }
        ],
        errorElement:<Error/>,
    },
   
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)