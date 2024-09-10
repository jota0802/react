import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Sobre from './routes/Sobre.jsx'
import Projetos from './routes/Projetos.jsx'
import Home from './routes/Home.jsx'

//colors:

{
  /*
#17252a	(23,37,42)
#2b7a78	(43,122,120)
#3aafa9	(58,175,169)
#def2f1	(222,242,241)
#feffff	(254,255,255)
 */
}

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