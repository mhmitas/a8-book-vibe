import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './routes/root'
import Home from './components/home/Home'
import BookDetails from './components/home/books/BookDetails'

const router = createBrowserRouter([
  {
    path: "",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('books.json')
      },
      {
        path: "/bookDetails/:bookID",
        element: <BookDetails></BookDetails>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
