
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import { Home } from "./pages/home"
import { About } from "./pages/about"
import { Project } from "./pages/project"
// import {Navigation} from "./components/navigation"
import { AppLayout } from "./components/AppLayout"
export const App = ()=>{
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      children:[
       {
         
      path:"/",
      element:<Home/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/project",
      element:<Project/>
    }
      ]
    }
    
  ])
  return<RouterProvider router={router}/>
}
