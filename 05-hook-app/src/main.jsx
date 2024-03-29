import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';

import { getRoutes } from './Routes';
const router = getRoutes();

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <RouterProvider router={router} />
    // </React.StrictMode>
);
