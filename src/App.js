
import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom/client"
import Navbar from "./components/Navbar"
import Body from "./components/Body"

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
//import AboutUs from "./components/AboutUs"
//import ContactUs from "./components/ContactUs"
import ErrorPage from "./components/ErrorPage"
import RestoMenu from "./components/RestoMenu"

const AboutUs= lazy(()=>import("./components/AboutUs"))

const ContactUs= lazy(()=> import('./components/ContactUs'))
const AppLayout = () => {

    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

const appRouter = createBrowserRouter([


    {

        path: '/',
        element: <AppLayout />,
        children: [

            {
                path: '/',
                element: <Body />,
            },
            {
                path: "/aboutUs",
                element:  <Suspense fallback={<h1>loading</h1>}>  <AboutUs />    </Suspense> 
            },

            {
                path: "/contactUs",
                element: <Suspense>  <ContactUs />   </Suspense>
            }
            , {


path:"/restaurants/:resId",
//resId is dynamic
element:<RestoMenu/>
            }
        ],
        errorElement: <ErrorPage />
    },



   
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<RouterProvider router={appRouter} />)