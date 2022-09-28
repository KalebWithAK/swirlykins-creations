import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from './App'
import Home from './pages/home'
import Category from './pages/category'
import Item from './pages/item'
import Orders from './pages/orders'
import Login from './pages/login'
import Register from './pages/register'

const router = createBrowserRouter([
  { path: '/', element: <App><Home /></App> },
  { path: '/category/:category_id', element: <App><Category /></App> },
  { path: '/item/:item_id', element: <App><Item /></App> },
  { path: '/login', element: <App><Login /></App> },
  { path: '/register', element: <App><Register /></App> },
  { path: '/cart', element: <App>Cart</App> },
  { path: '/orders', element: <App><Orders /></App> },
  { path: '/order/:order_id', element: <App>Order</App> },
  { path: '/checkout', element: <App>Checkout</App> },
  { path: '/profile', element: <App>Profile</App> },
])

createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)