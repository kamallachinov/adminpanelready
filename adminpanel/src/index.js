import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Table from './pages/Table';
import View from './pages/view';
import Add from './pages/Add';
import Update from './pages/update'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/add",
        element: <Add />
      },
      {
        path: "/",
        element: <Table />
      },
      {
        path: "View",
        element: <View />
      },
      {
        path: "/table/view/:supId",
        element: <View />
      },
      {
        path: "/table/update/:supId",
        element: <Update />
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <RouterProvider router={router} />

);

