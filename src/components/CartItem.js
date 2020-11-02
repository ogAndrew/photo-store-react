import React, { useState, useContext } from "react"
import { Context } from "../Context";

function CartItem({item}) {
  const [ hovered, setHovered ] = useState(false); 
  const { removeFromCart } = useContext(Context);
  const binClass = hovered ? "fill" : "line";
    return (
        <div className="cart-item">
            <div
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <i className={`ri-delete-bin-${binClass}`}
               onClick={() => removeFromCart(item)}
              ></i>
            </div>
            <img src={item.url} alt="random img" width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default CartItem