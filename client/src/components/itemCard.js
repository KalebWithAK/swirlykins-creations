import '../styles/components/itemCard.css'

export default function ItemCard() {
  return (
    <div className='item-card'>
      <img alt='item img' />
      <h3>Item Name</h3>
      <span>$25</span>
      <div className='details'>
        <p>
          Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Integer eget ornare purus.
        </p>
        <p>In stock: 3</p>
        <p>ID: 74381987</p>
        
      </div>
    </div>
  )
}