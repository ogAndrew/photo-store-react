import React, {useState, useEffect} from "react";
const Context = React.createContext();

const url = `https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json`

function ContextProvider({children}) {
    const [allPhotos, setAllPhotos] = useState([]);

    useEffect(() => {
        fetch(url)
            .then( response => response.json())
            .then( data => setAllPhotos(data));
    }, [])

    return (
        <div>
            <Context.Provider value={{allPhotos}}>
                {children}
            </Context.Provider>
        </div>
    )
}

export {Context, ContextProvider}
