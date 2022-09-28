import OrderCard from '../components/orderCard'
import '../styles/pages/orders.css'

export default function Orders() {
  return (
    <div className='orders-page'>
      <div className='order-container'>
        <h2>Orders In Progress</h2>
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      
      <div className='order-container'>
        <h2>Past Orders</h2>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />

        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
    </div>
  )
}