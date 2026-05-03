import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'


import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from 'react-router';
import Root from './components/Root/Root';
import Home from './components/Home/Home';
import Mobiles from './components/Mobiles/Mobiles';
import Laptops from './components/Laptops/Laptops';
import Users from './components/Users/Users';


const getSomeRecords = async () => {
  return [
    { id: 1, name: "Rahim" },
    { id: 2, name: "Karim" }
  ];
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users", loader: async () => {
          return { records: await getSomeRecords() };
        },
        Component: Users
      },
    ]
  },
  {
    path: "about",
    element: <div>about page</div>
  },
  {
    path: 'app',
    Component: App
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
