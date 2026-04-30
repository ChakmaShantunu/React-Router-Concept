import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from 'react-router';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello boss!</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
