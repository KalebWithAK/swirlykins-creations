import '../styles/components/orderCard.css'

export default function OrderCard() {
  return (
    <div className='order-card'>
      <h3>order id: 78362192</h3>
      <a className='tracking' href=''>tracking number</a>
      <p className='placed'>date placed: 7/12/2022</p>
      <p className='shipped'>date shipped: 7/21/2022</p>
      <a className='details' href=''>details</a>
    </div>
  )
}