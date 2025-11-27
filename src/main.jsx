import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './Routes/router';
import { RouterProvider } from 'react-router/dom';
import AuthProvider from './Context/AuthContext/AuthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}>
    </RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
