import VariationCard from '../components/variationCard'
import '../styles/pages/item.css'

export default function Item() {
  return (
    <div className='item-page'>
      <h2>Item Name</h2>

      <img className='item-preview' alt='variation img' />

      <div className='details'>
        <h3>Item Information</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ornare 
          purus. Integer tincidunt elementum ex. Integer maximus lectus nec tincidunt 
          vulputate. Quisque malesuada metus id aliquam luctus.
        </p>
        <p>Price: $25</p>
        <label htmlFor='quantity'>Quantity:</label>
        <input id='quantity' type='number' min={0} defaultValue={1} />
        <p>In stock: 5</p>
        <button onClick={(e) => { e.preventDefault(); alert('add to cart') }}>Add to Cart</button>
      </div>

      <div className='variation-container'>
          <VariationCard />
          <VariationCard />
          <VariationCard />

          <VariationCard />
          <VariationCard />
          <VariationCard />
        </div>
    </div>
  )
}