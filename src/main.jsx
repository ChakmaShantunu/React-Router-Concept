import { StrictMode, Suspense } from 'react'
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
import Members from './components/Members/Members';
import Users2 from './components/Users2/Users2';
import UserDetails from './components/UserDetails/UserDetails';


const getSomeRecords = async () => {
  return [
    { id: 1, name: "Rahim" },
    { id: 2, name: "Karim" }
  ];
};

const usersPromise = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mobiles", Component: Mobiles },
      { path: "laptops", Component: Laptops },
      {
        path: "users",
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users
      },
      {
        path: "users/:userId",
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        Component: UserDetails
      },
      {
        path: "members",
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
        Component: Members
      },
      {
        path: "users2",
        element: <Suspense fallback={<span>Loading...</span>}><Users2 usersPromise={usersPromise}></Users2></Suspense>
      }
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
