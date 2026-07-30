import FoodCard from "../components/FoodCard";
import foodItems from "../data/foodItems";

function Menu() {
    return (
        <section className="menu">
            <h1>Our Menu</h1>

            <div className="menu-container">
                {foodItems.map((item) => (
                    <FoodCard
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        rating={item.rating}
                    />
                ))}
            </div>
        </section>
    );
}

export default Menu;