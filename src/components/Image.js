import React, {useState, useContext } from 'react'
import PropTypes from 'prop-types';
import { Context } from "../Context";

function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false);
    const { toggleFavorite, addImgToCart, removeFromCart, cartItems } = useContext(Context);


    function heartIcon() {
        if(img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if(isHovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
        const isInCart = cartItems.some(item => item.id === img.id);
        if (isInCart) {
            return <i className="ri-shopping-cart-fill cart"
                      onClick={() => removeFromCart(img)}
                    ></i>
        } else if (isHovered) {
            return <i className="ri-add-circle-line cart"
                      onClick={() => addImgToCart(img)}
                    ></i>
        }
    }

    return (
        <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid" alt={img.id} />
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string,
        url: PropTypes.string,
        isFavorite: PropTypes.bool
    })
}

export default Image