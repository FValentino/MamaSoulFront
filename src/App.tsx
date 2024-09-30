import Products from '@components/products/products';
import './styles/App.scss'
import Home from "@pages/public/home/home"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SingleProduct from '@components/products/product/product';


function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home/>
    },
    {
      path: '/productos',
      element: <Products/>
    },
    {
      path: '/productos/:productId',
      element: <SingleProduct/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
