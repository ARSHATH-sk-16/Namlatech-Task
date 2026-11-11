import './FilterSidebar.css'
function FilterSidebar({priceRange,setPriceRange}){
    return(
        <div className="filter-sidebar">
            <h2>Filters</h2>
            <div className="filter-section">
                <h3>Price Range</h3>
                <label>
                        <input
                            type="radio"
                            name="price"
                            value="all"
                            checked={priceRange === 'all'}
                            onChange={(e) => setPriceRange(e.target.value)}
                        />
                        All Prices
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="price"
                            value="under2000"
                            checked={priceRange === 'under2000'}
                            onChange={(e) => setPriceRange(e.target.value)}
                        />
                        Under ₹2,000
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="price"
                            value="2000-4000"
                            checked={priceRange === '2000-4000'}
                            onChange={(e) => setPriceRange(e.target.value)}
                        />
                        ₹2,000 – ₹4,000
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="price"
                            value="4000-6000"
                            checked={priceRange === '4000-6000'}
                            onChange={(e) => setPriceRange(e.target.value)}
                        />
                        ₹4,000 – ₹6,000
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="price"
                            value="above6000"
                            checked={priceRange === 'above6000'}
                            onChange={(e) => setPriceRange(e.target.value)}
                        />
                        Above ₹6,000
                    </label>
            </div>

        </div>
    )
}
export default FilterSidebar;