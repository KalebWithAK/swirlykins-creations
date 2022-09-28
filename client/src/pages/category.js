import ItemCard from '../components/itemCard'
import '../styles/pages/category.css'

export default function CategoryCard() {
  return (
    <div className='category-page'>
      <h2>Category Name</h2>

      <div className='item-container'>
        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />

        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />

        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
    </div>
  )
}