import '../styles/components/orderItem.css'

export default function OrderItem() {
  return (
    <div className='order-item'>
      <h3>item name - variation</h3>
      <p>quantity: 1</p>
      <p>$25</p>
      <a href=''>cancel</a>
      <img alt='variation img' />
    </div>
  )
}