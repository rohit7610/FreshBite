import "../css/ProductDetail.css";
import { useParams } from "react-router-dom";
import foodItems from "../data/FoodItems";
import marg from "../assets/images/marg.jpg";

function ProductDetail({addToCart}) {
    const { id } = useParams();

    const item = foodItems.find((food) => food.id === parseInt(id));

    if (!item) {
        return <h2>Product not found</h2>;
    }

    return (
        <section className="product-detail">

                <img src={item.image} alt={item.name} />

            <div className="product-info">

                <h1>{item.name}</h1>

                <h2>₹{item.price}</h2>

                <p>
                    A delicious {item.name.toLowerCase()} made with fresh ingredients
                    and baked to perfection.
                </p>

                <h3>Ingredients</h3>

                <ul>
                    <li>Cheese</li>
                    <li>Tomato</li>
                    <li>Olives</li>
                    <li>Capsicum</li>
                </ul>

              <button onClick={() => addToCart(item)}>Add to Cart</button>

            </div>

        </section>
    );
}

export default ProductDetail;