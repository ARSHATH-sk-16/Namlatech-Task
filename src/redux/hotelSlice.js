import { createSlice } from '@reduxjs/toolkit'
import initialHotels from '../data/hotels'

const hotelSlice = createSlice({
  name: 'hotels',

  initialState: {
    hotels: initialHotels
  },

  reducers: {
    addHotel: (state, action) => {
      state.hotels.push(action.payload)
    },

    updateHotel: (state, action) => {
      const index = state.hotels.findIndex(
        (hotel) => hotel.id === action.payload.id
      )

      if (index !== -1) {
        state.hotels[index] = action.payload
      }
    },

    deleteHotel: (state, action) => {
      state.hotels = state.hotels.filter(
        (hotel) => hotel.id !== action.payload
      )
    }
  }
})

export const { addHotel, updateHotel, deleteHotel } = hotelSlice.actions

export default hotelSlice.reducer
