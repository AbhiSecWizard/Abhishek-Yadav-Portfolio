// import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./AppLayout/applayout.jsx"
import { Home } from "./Pages/Home.jsx"
import { About } from "./Pages/About.jsx"

export const App = ()=>{

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<div>Error Found</div>,
    children:[{
          index:true,
          element:<Home/>
      },
      {
        path:"/home",
        element:<Home/>
    },
      {
        path:"/about",
        element:<About/>
    }]
  }
])


  return <RouterProvider router={router}/>
  
}