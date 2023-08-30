import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import router from './Routes/Routes.jsx';
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeContext, ThemeProvider } from './Providers/ThemeProvider.jsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <HelmetProvider>
          <QueryClientProvider client={queryClient}>
            <div>
              <RouterProvider router={router}></RouterProvider>
            </div>
          </QueryClientProvider>
        </HelmetProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
