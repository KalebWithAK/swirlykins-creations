import '../styles/components/cartItem.css'

export default function CartItem() {
  return (
    <div className='cart-item'>
      <h3>item name - variation</h3>
      <div className='quantity'>
        <label for='quantity'>quantity</label>
        <input id='quantity' type='number' min='0' />
      </div>
      <p>$20</p>
      <div className='buttons'>
        <a href=''>edit</a>
        <a href=''>delete</a>
      </div>
      <img alt='variation img' />
    </div>
  )
}