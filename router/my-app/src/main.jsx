import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
	Route,
} from 'react-router-dom';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path = '/'
			element = {<div>Hello Router!</div>}
		/>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);