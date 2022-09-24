import './styles/App.css'
import Header from './components/header'
export default function App() {
  return (
    <div className='App'>
      <Header logged_in={true} />
    </div>
  )
}