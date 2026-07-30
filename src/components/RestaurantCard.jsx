import "../css/RestaurantCard.css";

function RestaurantCard(props){

    return(
        <div className="restaurant-card">

            <h1>{props.image}</h1>

            <h2>{props.name}</h2>

            <p>{props.cuisine}</p>

            <p>{props.rating}</p>

            <p>{props.time}</p>

            <button>View Menu</button>

        </div>
    )

}

export default RestaurantCard;