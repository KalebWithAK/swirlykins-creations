import './styles/App.css'
import Header from './components/header'
import Footer from './components/footer'
import CategoryCard from './components/categoryCard'
import ItemCard from './components/itemCard'
import VariationCard from './components/variationCard'
import CartItem from './components/cartItem'
import OrderCard from './components/orderCard'
import OrderItem from './components/orderItem'

export default function App() {
  return (
    <div className='App'>
      <Header logged_in={true} />
        <CategoryCard />
        <ItemCard />
        <VariationCard />
        <CartItem />
        <OrderCard />
        <OrderItem />
      <Footer />
    </div>
  )
}