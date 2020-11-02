import React, { useState, useContext } from "react"
import { Context } from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order");
    const { cartItems, emptyCart } = useContext(Context);
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    let isCart = cartItems.length > 0 ? true : false
    
    function calculateTotal() {
        const total = cartItems.length * 5.99;
        return `${total.toLocaleString("en-us", {style: "currency", currency: "USD"})}`
    }

    function placeOrder() {
        setButtonText('Ordering...')
        setTimeout(() => {
            setButtonText('Order Placed')            
            emptyCart()
        },3000)
    }

    return (
        <main className="cart-page">
            <h1>Checkout</h1>
            {cartItemElements}
            <p className="total-cost">Total: {calculateTotal()}</p>
        {
            isCart ?
            <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>                
            </div> :
            <p className="text-bottom">Your cart is empty.</p>
        }
            
        </main>
    )
}

export default Cart
