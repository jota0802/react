import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Sobre from './routes/Sobre.jsx'
import Projetos from './routes/Projetos.jsx'
import Home from './routes/Home.jsx'



const router = createBrowserRouter([
{

  path:'/',element:<App/>,
  errrElement:<Error/>,

  children:[
    {path:'/',element:<Home/>},
    {path:'/Sobre',element:<Sobre/>},
    {path:'/Projetos',element:<Projetos/>},
  ]

}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)