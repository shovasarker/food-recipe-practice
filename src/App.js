import AllPages from './pages/AllPages'
import Category from './components/Category'
import SearchBar from './components/SearchBar'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <SearchBar />
      <Category />
      <AllPages />
    </div>
  )
}

export default App
