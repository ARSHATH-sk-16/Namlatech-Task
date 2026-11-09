import './HotelCard.css'
import { Link } from 'react-router-dom'
function HotelCard(props){
    
    return(
        <div className="hotel-card">

            <img src={props.image} alt={props.name} />
            
                <div className="hotel-info">
                    <h2>{props.name}</h2>
                    <h3>{props.location}</h3>
                    <h4>{props.description}</h4>
                    <h2>₹{props.price}</h2>
                    <button className="edit-btn" onClick={props.onEdit}> Edit </button>
                    <button className="delete-btn" onClick={props.onDelete}> Delete </button>
                    <Link
                        to={`/hotel/${props.id}`}
                        state={{ hotel: props.hotel }}
                        className="details-btn"
                        >
                        View Details
                    </Link>
                </div>
            
        </div>
    )
    
}

export default HotelCard;