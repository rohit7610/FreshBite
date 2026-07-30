import RestaurantCard from "../components/RestaurantCard";
import restaurants from "../data/Restaurants";
import "../css/RestaurantCard.css";

function Restaurant(){

    return(

        <section className="restaurants">

            <h1>Restaurants Near You</h1>

            <div className="restaurant-container">

                {
                    restaurants.map((restaurant)=>(
                        <RestaurantCard
                            key={restaurant.id}
                            image={restaurant.image}
                            name={restaurant.name}
                            cuisine={restaurant.cuisine}
                            rating={restaurant.rating}
                            time={restaurant.time}
                        />
                    ))
                }

            </div>

        </section>

    )

}

export default Restaurant;