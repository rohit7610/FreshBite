import "../css/FeaturedFood.css";
import FoodCard from "./FoodCard";
import foodItems from "../data/FoodItems";

function FeaturedFoods() {
    return (
        <section className="featured-foods">

            <h1>Featured Foods</h1>

            <div className="food-container">

                {
                    foodItems.map((item) => (
                        <FoodCard
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))
                }

            </div>

        </section>
    );
}

export default FeaturedFoods;