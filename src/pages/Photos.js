import React, { useContext } from "react"
import { Context } from "../Context";

import Image from "../components/Image";
import { getClass } from "../utils";

function Photos() {
    const { allPhotos } = useContext(Context);
    
    const images = allPhotos.map(( image, idx ) => (
        <Image key={image.id} img={image} className={getClass(idx)} />
    ))

    return (
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos