import React, {useState} from 'react'

function Image({className, img}) {
    const [isHovered, setIsHovered] = useState(false);

    const heartIcon = isHovered && <i className="ri-heart-line favorite"></i>
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
