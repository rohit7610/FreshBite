import collage from "../assets/images/collage.jpg";
import "../css/About.css";
function About() {
    return (
        <section className="about">

            <img
                src={collage}
                alt="FreshBite Food"
            />

            <h1>About FreshBite</h1>

            <p>
                FreshBite is your trusted online food ordering platform
                delivering delicious meals from the best restaurants.
            </p>

            <div className="features">

                <p>✔ Fast Delivery</p>

                <p>✔ Fresh Food</p>

                <p>✔ Best Restaurants</p>

            </div>

        </section>
    );
}

export default About;