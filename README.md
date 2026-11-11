# HotelHub – Hotel Listing & Management Application

HotelHub is a React-based hotel listing and management application. Users can explore hotels, search by hotel name, filter by price, view hotel details, and manage hotel listings.

## Features

- **Hotel Listings:** Display hotels with images, names, prices, and descriptions.
- **Search:** Search hotels by name.
- **Price Filtering:** Filter hotels based on price ranges.
- **Pagination:** Navigate through hotel listings.
- **Add Hotel:** Add a new hotel using a reusable form.
- **Edit Hotel:** Update existing hotel information.
- **Delete Hotel:** Remove hotels with a success notification.
- **Image Preview:** Preview an uploaded hotel image before submitting.
- **Hotel Details:** View hotel descriptions, prices, latitude, longitude, and map location.
- **Responsive Design:** Layout adapts to different screen sizes.
- **SEO:** Dynamic page titles and descriptions using React Helmet.

## Tech Stack

- React.js
- Redux Toolkit
- React Redux
- React Router
- HTML5
- CSS3
- Lucide React
- React Helmet Async
- Vite
- OpenStreetMap

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/ARSHATH-sk-16/Namlatech-task.git
```

### 2. Navigate to the project directory

```bash
cd namlatech
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Production Build

To create a production build:

```bash
npm run build
```

To check the code using ESLint:

```bash
npm run lint
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

namatech/
├── public/
├── src/
│   ├── assets/
│   │  
│   ├── components/
│   │   ├── FilterSidebar.jsx
│   │   ├── FilterSidebar.css
│   │   ├── HotelCard.jsx
│   │   ├── HotelCard.css
│   │   ├── HotelForm.jsx
│   │   ├── HotelForm.css
│   │   ├── Navbar.jsx
│   │   └── Navbar.css
│   ├── data/
│   │   └── hotels.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── HotelDetails.jsx
│   │   └── HotelDetails.css
│   ├── redux/
│   │   ├── hotelSlice.js
│   │   └── store.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── README.md
├── package.json
└── index.html

## Data and Backend

This submission uses sample hotel data for the frontend implementation. Redux Toolkit manages hotel listing state.

A backend API and database are not included in this frontend-only implementation. Changes made during a session are not persisted after a full page refresh.

## Screenshots

- Home page.
- Hotel details page
- Add/Edit hotel form
- Search and price filter

## Author

Developed as a frontend implementation task for Namlatech.