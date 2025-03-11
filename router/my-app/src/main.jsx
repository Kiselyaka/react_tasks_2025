import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import Root from './routes/root';
import ErrorPage404 from './error-page-404';
import Product from './routes/product';
import Student from './routes/student';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		errorElement: <ErrorPage404 />,
	},
	{
		path: 'products/:productId',
		element: <Product />,
	},
	{
		path: 'students/:studentId',
		element: <Student />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);