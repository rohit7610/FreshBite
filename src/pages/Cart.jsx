import "../css/Cart.css";
function Cart({ cart, increaseQuantity, decreaseQuantity }) {
const total = cart.reduce(

    (sum, item) => sum + item.price * item.quantity,

    0

);
    return (

        <div className="cart-container">

            <h1>Your Cart</h1>

            {
                cart.map((item, index) => (

                    <div className="cart-item" key={item.id}>

                        <h2>{item.name}</h2>

                        <p>₹{item.price}</p>
                        <div className="quantity">

    <button
        onClick={() =>
            decreaseQuantity(item.id)
        }
    >
        -
    </button>

    <span>{item.quantity}</span>

    <button
        onClick={() =>
            increaseQuantity(item.id)
        }
    >
        +
    </button>

</div>

                    </div>

                ))
            }

            <h2 className="total">Total: ₹{total.toFixed(2)}</h2>

        </div>

    );

}
export default Cart;