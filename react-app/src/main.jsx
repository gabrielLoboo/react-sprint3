import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Erro from './routes/Erro/Erro.jsx'
import Servicos from './routes/Servicos/Servicos.jsx'

const router = createBrowserRouter(
  [
    {path : "/", element : <App />, errorElement : <Erro />,
    children: [
      { path: "/servicos" , element : <Servicos />},
      { path: "/old" , element : <Navigate to = "/" />}      
  ]},
  ]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
