import React, {useState, useContext } from 'react'
import { Context } from "../Context";

function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false);
    const { toggleFavorite } = useContext(Context);

    const heartIcon = isHovered && 
                      <i 
                         onClick={() => toggleFavorite(img.id)} 
                         className="ri-heart-line favorite">
                      </i>

    const cartIcon = isHovered && <i className="ri-add-circle-line cart"></i> 

    return (
        <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`${className} image-container`}
        >
            <img src={img.url} className="image-grid" alt={img.id} />
            {heartIcon}
            {cartIcon}
        </div>
    )
}

export default Image


// Add ability to toggle an image's `isFavorited` property by clicking the heart icon (filled heart doesn't need to display on the image yet)

// 1. Add a toggleFavorite method to context. It should take an `id` parameter and update the array of allPhotos by flipping the `isFavorited` property of the photo with the matching `id`
//     a. Have this function also console.log something so we know it's running correctly
//     b. Don't try to modify the individual image object only. Make sure to provide a whole new array to context with the one item with the matching `id` being changed.
// 2. Make it so clicking the heart icon on any given image runs this method
