import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AllCast from './page/AllCast.jsx';
import Home from './page/Home.jsx';
import SingleCast from './page/SingleCast.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: '/allcast',
    element: <AllCast></AllCast>
  },
  {
    path: 'character/:id',
    element: <SingleCast></SingleCast>,
    loader: ({ params }) => fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
