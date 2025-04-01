import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Root, {
	loader as rootLoader,
	action as rootAction
} from './routes/root';

import ErrorPage404 from './error-page-404'; 
import Product from './routes/product';
import Student from './routes/student'; 


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage404 />,
    loader: rootLoader,
    action: rootAction,
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