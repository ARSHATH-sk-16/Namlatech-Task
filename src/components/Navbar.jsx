import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar({ search, setSearch,onAddHotel }) {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>Hotel Hub</h2>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search hotels by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button>Search</button>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <button className="add-btn" onClick={onAddHotel}>
           ➕ Add Hotel
        </button>
      </div>

    </nav>
  )
}

export default Navbar
