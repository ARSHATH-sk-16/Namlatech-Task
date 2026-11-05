
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

    onSave({
      ...hotel,
      name,
      location,
      description,
      price: Number(price),
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
