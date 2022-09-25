import '../styles/pages/home.css'
import CategoryCard from '../components/categoryCard'

export default function Home() {
  return (
    <div className='home'>
      <h2>Categories</h2>

      <div className='category-container'>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />

        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  )
}