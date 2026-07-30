import Navbar from "../components/TempNavbar";
import Hero from "../components/Hero";
import Category from "../components/Category";
import FeaturedFoods from "../components/FeaturedFood";
import Fotter from "../components/Fotter";

function Home() {
    return (
        <>
            <Hero />
            <Category />
            <FeaturedFoods />
            <Fotter />
        </>
    );
}

export default Home;