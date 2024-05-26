import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter , RouterProvider , } from 'react-router-dom'
import Header from './components/Header'
import MovieCard from './pages/MovieCard'
import Layout from './components/Layout'
import FavMovie from './pages/FavMovie'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MovieCard />
      },
      {
        path: "fav",
        element: <FavMovie />
      }
    ]
  }
]);
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
