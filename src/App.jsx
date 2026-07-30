import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
const [cart, setCart] = useState([]);
  function addToCart(item) {

    const existingItem = cart.find(
        (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {

        setCart(
            cart.map((cartItem) =>
                cartItem.id === item.id
                    ? {
                          ...cartItem,
                          quantity: cartItem.quantity + 1,
                      }
                    : cartItem
            )
        );

    } else {

        setCart([
            ...cart,
            {
                ...item,
                quantity: 1,
            },
        ]);

    }
}
function increaseQuantity(id) {

    setCart(
        cart.map((item) =>
            item.id === id
                ? {
                      ...item,
                      quantity: item.quantity + 1,
                  }
                : item
        )
    );

}
function decreaseQuantity(id) {

    setCart(
        cart
            .map((item) =>
                item.id === id
                    ? {
                          ...item,
                          quantity: item.quantity - 1,
                      }
                    : item
            )
            .filter((item) => item.quantity > 0)
    );

}
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
         path="/product/:id"
         element={<ProductDetail addToCart={addToCart} />}
       />
      </Routes>
    </>
  );
}
export default App;