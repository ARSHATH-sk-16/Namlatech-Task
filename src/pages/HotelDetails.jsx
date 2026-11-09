import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import initialHotels from '../data/hotels'
import './HotelDetails.css'

function HotelDetails() {
  const location = useLocation()
  const navigate = useNavigate()

  // Receive the selected hotel from the hotel card 

  const { id } = useParams()
  const hotel = location.state?.hotel || initialHotels.find((item) => item.id === Number(id))

  // If no hotel was passed    return to the listing page
  if (!hotel) {
    return (
      <div className="details-not-found">
        <h2>Hotel details not available</h2>
        <button onClick={() => navigate('/')}>Back to Hotels</button>
      </div>
    )
  }
// i used Ai here so i need to learn more on this 
  return (
    <div className="hotel-details">
      <Helmet>
        <title>{hotel.name} | HotelHub</title>
        <meta name="description" content={hotel.description} />
      </Helmet>

      <button className="back-btn" onClick={() => navigate('/')}>
        ⬅️ Back to Hotels
      </button>

      <img
        className="hotel-detail-image"
        src={hotel.image}
        alt={`${hotel.name} hotel`}
      />

      <div className="details-content">
        <h1>{hotel.name}</h1>
        <h3>{hotel.location}</h3>
        <p>{hotel.description}</p>
        <h2>₹{hotel.price} </h2>

        <h3>Hotel Coordinates</h3>
        <p>Latitude: {hotel.latitude ?? 'Not provided'}</p>
        <p>Longitude: {hotel.longitude ?? 'Not provided'}</p>

        {hotel.latitude != null && hotel.longitude != null && (
          <iframe
            title={`${hotel.name} location map`}
            className="hotel-map"
            src={`https://www.openstreetmap.org/export/embed.html?marker=${hotel.latitude}%2C${hotel.longitude}`}
            loading="lazy"
          />
        )}
      </div>
    </div>
  )
}

export default HotelDetails