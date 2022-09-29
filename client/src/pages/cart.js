import CartItem from '../components/cartItem'
import '../styles/pages/cart.css'

export default function Cart() {
  function handleCheckout() {
    window.location.href = '/checkout'
  }

  return (
    <div className='cart-page'>
      <h2>Cart</h2>

      <div className='cartItem-container'>
        <CartItem />
        <CartItem />
        <CartItem />

        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className='details'>
        <p>Number of items: 6</p>
        <p>Subtotal: $25</p>

        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  )
}