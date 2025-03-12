import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Root from './routes/root'; 
import ErrorPage404 from './error-page-404'; 
import Product from './routes/product';
import Student from './routes/student'; 
import Root, { loader as rootLoader } from './routes/root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage404 />,
    loader: rootLoader,
    children: [
      {
        path: 'products/:productId',
        element: <Product />,
      },
      {
        path: 'students/:studentId',
        element: <Student />, 
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);