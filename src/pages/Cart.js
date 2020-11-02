import React, { useContext } from "react"
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
    const { cartItems } = useContext(Context);
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))
    
    function calculateTotal() {
        const total = cartItems.length * 5.99;
        return `${total.toLocaleString("en-us", {style: "currency", currency: "USD"})}`
    }
    
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
    <p className="total-cost">Total: {calculateTotal()}</p>
            <div className="order-button">
                <button>Place Order</button>
            </div>
        </main>
    )
}

export default Cart
