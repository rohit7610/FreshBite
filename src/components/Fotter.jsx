import { Link } from "react-router-dom";
import "../css/Fotter.css";

function Fotter() {
    return (
        <footer className="footer">

            <h2>FreshBite</h2>

            <p>Fresh food delivered to your doorstep.</p>

            <div className="footer-links">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <p className="copyright">
                © 2026 FreshBite. All Rights Reserved.
            </p>

        </footer>
    );
}

export default Fotter;