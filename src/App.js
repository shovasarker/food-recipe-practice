import AllPages from './pages/AllPages'
import Category from './components/Category'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className='App'>
      <SearchBar />
      <Category />
      <AllPages />
    </div>
  )
}

export default App
