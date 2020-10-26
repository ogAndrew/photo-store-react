import React from "react";
const Context = React.createContext();

function ContextProvider({children}) {
    return (
        <div>
            <Context.Provider value={""}>
                {children}
            </Context.Provider>
        </div>
    )
}

export {Context, ContextProvider}
