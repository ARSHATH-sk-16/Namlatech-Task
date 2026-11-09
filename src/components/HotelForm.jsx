
import { useState } from 'react'
import './HotelForm.css'

function HotelForm({ hotel, onSave, onCancel }) {
    const [name, setName] = useState(hotel?.name || '')
    const [location, setLocation] = useState(hotel?.location || '')
    const [description, setDescription] = useState(hotel?.description || '')
    const [price, setPrice] = useState(hotel?.price || '')
    const [image, setImage] = useState(hotel?.image || '')

  const handleImageChange = (e) => {
    const file = e.target.files[0]

    if (file) {
      const reader = new FileReader()

      reader.onloadend = () => {
        setImage(reader.result)
      }

      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e) => {
  e.preventDefault()

  if (!name.trim()) {
    alert('Please enter hotel name')
    return
  }

  if (!location.trim()) {
    alert('Please enter hotel location')
    return
  }

  if (!description.trim()) {
    alert('Please enter hotel description')
    return
  }

  if (!price || Number(price) <= 0) {
    alert('Please enter a valid hotel price')
    return
  }

  // if (latitude === '' || Number(latitude) < -90 || Number(latitude) > 90) {
  //   alert('Latitude must be between -90 and 90')
  //   return
  // }

  // if (longitude === '' || Number(longitude) < -180 || Number(longitude) > 180) {
  //   alert('Longitude must be between -180 and 180')
  //   return
  // }

  if (!image) {
    alert('Please select a hotel image')
    return
  }

  onSave({
    ...hotel,
    name: name.trim(),
    location: location.trim(),
    description: description.trim(),
    price: Number(price),
    // latitude: Number(latitude),
    // longitude: Number(longitude),
    image
  })
}

  return (
    <div className="form-overlay">
      <form className="hotel-form" onSubmit={handleSubmit}>
        <h2>{hotel?"Edit Hotel" : "Add New Hotel"}</h2>

        <label>Hotel Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Price (₹)</label>
        <input
          type="number"
          min="1"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />            

        <label>Hotel Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        {image && (
            <img
                className="image-preview"
                src={image}
                alt="Hotel preview"
            />
        )}

        <div className="form-buttons">
          <button type="submit">Save Changes</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default HotelForm
