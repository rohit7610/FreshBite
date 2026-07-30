import "../css/Hero.css";
import image from "../assets/images/pizza.jpg";
function Hero(){
    return(
        <section className="hero">

    <h1>Fresh Food Delivered <br /> Straight To Your Door</h1>

    <p>
Experience restaurant-quality meals with fast delivery,
fresh ingredients, and unforgettable flavors.
</p>

    <img src={image} alt="Pizza"/>

    <div className="hero-buttons">
        <button>Order Now</button>
        <button>Explore Menu</button>
    </div>

</section>
        
    )
}
export default Hero;