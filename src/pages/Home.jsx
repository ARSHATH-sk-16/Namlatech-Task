import HotelCard from '../components/HotelCard'
import './Home.css'
import FilterSidebar from '../components/FilterSidebar'
import {  useState,useEffect } from 'react'
import HotelForm from '../components/HotelForm'
import { Helmet } from 'react-helmet-async'
import { useDispatch, useSelector } from 'react-redux'
import { addHotel, updateHotel, deleteHotel } from '../redux/hotelSlice'


function Home({ search, priceRange, setPriceRange,showAddForm, setShowAddForm }){

  //pagination 
const [currentPage, setCurrentPage] = useState(1)
const hotelsPerPage = 3
useEffect(() => {
  setCurrentPage(1)
}, [search, priceRange])
// i need to focus here 

// redux is used here 
const dispatch = useDispatch()

const hotels = useSelector((state) => state.hotels.hotels)

// noticed changin the popup message 
const [successMessage, setSuccessMessage] = useState('');

// delete handel by the redux
const handleDelete = (id) => {
  dispatch(deleteHotel(id))

  setSuccessMessage('Hotel deleted successfully!')

  setTimeout(() => {
    setSuccessMessage('')
  }, 2000)
}

// edit hotles 

const [editingHotel, setEditingHotel] = useState(null)

const handleEdit = (hotel) => {
  setEditingHotel(hotel)
}

//update handle by redux 
const handleUpdate = (updatedHotel) => {
  dispatch(updateHotel(updatedHotel))
  setEditingHotel(null)

  setSuccessMessage('Hotel updated successfully!')

  setTimeout(() => {
    setSuccessMessage('')
  }, 2000)
}

// adding hotel by redux
const handleAddHotel = (newHotel) => {
  const hotelWithId = {
    ...newHotel,
    id: Date.now()
  }

  dispatch(addHotel(hotelWithId))
  setShowAddForm(false)

  setSuccessMessage('New hotel added successfully!')

  setTimeout(() => {
    setSuccessMessage('')
  }, 2000)
}

const filteredHotels = hotels.filter((hotel) => {
  const matchesSearch = hotel.name
    .toLowerCase()
    .includes(search.toLowerCase())

  let matchesPrice = true

  if (priceRange === 'under2000') {
    matchesPrice = hotel.price < 2000
  } 
  else if (priceRange === '2000-4000') {
    matchesPrice = hotel.price >= 2000 && hotel.price <= 4000
  } 
  else if (priceRange === '4000-6000') {
    matchesPrice = hotel.price > 4000 && hotel.price <= 6000
  } 
  else if (priceRange === 'above6000') {
    matchesPrice = hotel.price > 6000
  }
  

  return matchesSearch && matchesPrice
  
})

// Calculate the last and first hotel indexes
const lastIndex = currentPage * hotelsPerPage
const firstIndex = lastIndex - hotelsPerPage

// Get hotels for the current page
const currentHotels = filteredHotels.slice(firstIndex, lastIndex)

// Calculate total pages
const totalPages = Math.ceil(filteredHotels.length / hotelsPerPage)

return(
    <>
        <div className="hotel-layout">
            <FilterSidebar priceRange={priceRange} setPriceRange={setPriceRange}/>
                <div className="hotel-list">
                    {filteredHotels.length > 0 ? (
                     currentHotels.map((hotel) => (
                        <HotelCard
                            key={hotel.id}
                            image={hotel.image}
                            name={hotel.name}
                            location={hotel.location}
                            description={hotel.description}
                            price={hotel.price}
                            onDelete={() => handleDelete(hotel.id)}
                            onEdit={() => handleEdit(hotel)}
                            id={hotel.id}
                            hotel={hotel}
                        />
                    ))
                         ) : (
                                <p>No hotels found!</p>
                    )}
                </div>
                    <div className="pagination">
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>

                        <span>
                            Page {currentPage} of {totalPages || 1}
                        </span>

                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={currentPage === totalPages || totalPages === 0}
                        >
                            Next
                        </button>
                    </div>

        </div>
          {successMessage && (
            <div className="success-popup">
              {successMessage}
            </div>
          )}

        {editingHotel && (
        <HotelForm
            hotel={editingHotel}
            onSave={handleUpdate}
            onCancel={() => setEditingHotel(null)}
        />
        )}

        {showAddForm && (
            <HotelForm
                hotel={null}
                onSave={handleAddHotel}
                onCancel={() => setShowAddForm(false)}
            />
        )}
        <Helmet>
          <title>HotelHub | Find Your Perfect Hotel</title>
          <meta
            name="description"
            content="Explore hotels, compare prices, and find the perfect place for your next stay with HotelHub."
          />
          <meta
            name="keywords"
            content="hotels, hotel booking, hotel search, affordable hotels"
          />
        </Helmet>
    </>
    
)
}

export default Home;
