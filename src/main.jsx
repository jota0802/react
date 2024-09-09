import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import App from './App.jsx'
im



const router =()=> createBrowserRouter([
{

  path:'/',element:<App/>,
  errrElement:<Erro/>,

  children:[
    {path:'/',element:<Home/>},
    {path:'/Sobre',element:<Sobre/>},
    {path:'/Projetos',element:<Porjetos/>},
  ]

}
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
