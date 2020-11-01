import React from "react"

function Cart() {
    return (
        <main className="cart-page">
            <h1>Check out</h1>
        </main>
    )
}

export default Cart



// Setup context to manage items in an array called `cartItems`. This will be an array of image objects.

// 1. Add the `cartItems` state to context. (Array)
// 2. Add function to add an image to the cart. (Takes the full image object as parameter)
// 3. Make it so clicking the plus icon on the image adds the item to the cart. (Console.log the cart items array to see that it's working)
