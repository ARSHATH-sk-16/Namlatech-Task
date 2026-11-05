import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'

function App() {
  const [search, setSearch] = useState('')
  const [priceRange,setPriceRange] = useState('all')

  const [showAddForm, setShowAddForm] = useState(false)
  return (
    <>
      <Navbar 
      search={search} 
      setSearch={setSearch} 
      onAddHotel={() => setShowAddForm(true)} />

      <Home
      search={search}
      priceRange={priceRange}
      setPriceRange={setPriceRange}
      showAddForm={showAddForm}
      setShowAddForm={setShowAddForm}      
      />
    </>
  )
}

export default App