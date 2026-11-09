
import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import HotelDetails from './pages/HotelDetails'

function App() {
  const [search, setSearch] = useState('')
  const [priceRange, setPriceRange] = useState('all')
  const [showAddForm, setShowAddForm] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  // Update search and reset pagination together/ issue when one letter typed not shown 
  const handleSearch = (value) => {
    setSearch(value)
    setCurrentPage(1)
  }

  // Update price filter and reset pagination
  const handlePriceRange = (value) => {
    setPriceRange(value)
    setCurrentPage(1)
  }

  return (
    <>
      <Navbar
        search={search}
        setSearch={handleSearch}
        onAddHotel={() => setShowAddForm(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              search={search}
              priceRange={priceRange}
              setPriceRange={handlePriceRange}
              showAddForm={showAddForm}
              setShowAddForm={setShowAddForm}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />

        <Route path="/hotel/:id" element={<HotelDetails />} />
      </Routes>
    </>
  )
}

export default App
