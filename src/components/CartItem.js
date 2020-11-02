import React, { useState, useContext } from "react"
import PropTypes from "prop-types";
import { Context } from "../Context";

function CartItem({item}) {
  const [ hovered, setHovered ] = useState(false); 
  const { removeFromCart } = useContext(Context);
  const binClass = hovered ? "fill" : "line";

    return (
        <div className="cart-item">
          <i 
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`ri-delete-bin-${binClass}`}
            onClick={() => removeFromCart(item)}
          >
          </i>
          
          <img src={item.url} alt="random img" width="130px" />
          <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
}

export default CartItem