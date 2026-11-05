import HotelCard from '../components/HotelCard'
import hotel1 from '../assets/hotel1.png'
import hotel2 from '../assets/hotel2.png'
import hotel3 from '../assets/hotel1.png'
import './Home.css'
import FilterSidebar from '../components/FilterSidebar'
import { useEffect, useState } from 'react'
import HotelForm from '../components/HotelForm'

function Home({ search, priceRange, setPriceRange,showAddForm, setShowAddForm }){

const [currentPage, setCurrentPage] = useState(1)
const hotelsPerPage = 2
useEffect(() => {
  setCurrentPage(1)
}, [search, priceRange])


const [hotels,setHotels] =useState([
    {
        id:1,
        image:hotel1,
        name:"Grand place",
        location: 'Chennai, Tamil Nadu',
        description:"A beautiful luxury hotel with swimming pool and restaurant.",
        price:3500
    },
    {
        id:2,
        image:hotel2,
        name:"Ocean View",
         location: 'Goa, India',
        description:"Enjoy a relaxing stay with beautiful sea views.",
        price:4500
    },
    {
        id:3,
        image:hotel3,
        name:"Taj Hotel",
        location: 'Ooty, Tamil Nadu',
        description:"A peaceful hotel surrounded by beautiful mountains.",
        price:6500
    },

]);
const [showPopup, setShowPopup] = useState(false)

const handleDelete = (id) => {
  const updatedHotels = hotels.filter((hotel) => hotel.id !== id)

  setHotels(updatedHotels)
  setShowPopup(true)

  setTimeout(() => {
    setShowPopup(false)
  }, 2000)
}
const [editingHotel, setEditingHotel] = useState(null)

const handleEdit = (hotel) => {
  setEditingHotel(hotel)
}

const handleUpdate = (updatedHotel) => {
  const updatedHotels = hotels.map((hotel) =>
    hotel.id === updatedHotel.id ? updatedHotel : hotel
  )

  setHotels(updatedHotels)
  setEditingHotel(null)
  setShowPopup(true)

  setTimeout(() => {
    setShowPopup(false)
  }, 2000)
}

const handleAddHotel = (newHotel) => {
  const hotelWithId = {
    ...newHotel,
    id: Date.now()
  }

  setHotels((previousHotels) => [
    ...previousHotels,
    hotelWithId
  ])

  setEditingHotel(null)
  setShowPopup(true)

  setTimeout(() => {
    setShowPopup(false)
  }, 2000)

  setShowAddForm(false)
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
// const HotelList = Hotels.map(
//     (Hotels)=><HotelCard
//     key={Hotels.id}
//     name={Hotels.name}
//     description={Hotels.description}
//     price={Hotels.price}
//     location={Hotels.location}
//     image={Hotels.image}
//     />
// )

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
        {showPopup && (
                <div className="success-popup">
                    Hotel deleted successfully!
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
    </>
    
)
}

export default Home;
