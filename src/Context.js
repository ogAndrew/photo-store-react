import React, {useState, useEffect} from "react";
const Context = React.createContext();

const url = `https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([]);

    function toggleFavorite(id) {
        let updatedArr = allPhotos.map(photo => {
            if (photo.id === id) {
                return {...photo, isFavorite: !photo.isFavorite }
            }
            return photo;
        })
        setAllPhotos(updatedArr);
    }

    useEffect(() => {
        fetch(url)
            .then( response => response.json())
            .then( data => setAllPhotos(data));
    }, [])

    return (
        <div>
            <Context.Provider value={{allPhotos, toggleFavorite }}>
                {children}
            </Context.Provider>
        </div>
    )
}

export {Context, ContextProvider}
