import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Component/Shop/Shop';
import Header from './Component/Header/Header';
import Review from './Component/Review/Review';
import loder from './loder/loder';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Header></Header>,
    children:[
      {
        path:"/",
        element:<Shop></Shop>
      },
      {
        path:"/oder review",
        element: <Review></Review>,
        loader:loder
      },
      {
        path:"/Inventory",
        element: <div>ami in</div>
      },
      {
        path:"/Login",
        element: <div>ami login</div>
      },
      {
        path:"/oder review",
        element:<Review></Review>
      },
      {
        path:"*",
        element: <div><h1>404</h1></div>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
