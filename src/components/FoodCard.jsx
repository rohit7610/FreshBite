import { Link } from "react-router-dom";
import "../css/FoodCard.css";

function FoodCard(props) {
    return (
        <div className="card">

            <img src={props.image} alt={props.name} />

            <h2>{props.name}</h2>

            <p className="price">{props.price}</p>

            <p className="rating">{props.rating}</p>

            <Link to={`/product/${props.id}`}>
                <button>View Details</button>
            </Link>

        </div>
    );
}

export default FoodCard;