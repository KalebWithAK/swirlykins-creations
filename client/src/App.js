import './styles/App.css'

import Header from './components/header'
import Footer from './components/footer'

export default function App({ children }) {
  return (
    <div className='App'>
      <Header logged_in={false} />
      {children}
      <Footer />
    </div>
  )
}