import { createContext, useReducer } from "react";

const initialState = {
    team: [],
    pokedex: []
}

const GlobalContext = createContext()

const GlobalContextProvider = (props) => {
    
    const reducer = (state, action) => {
        switch(action.type) {
            default:
        }
    }

    return (
        <GlobalContext.Provider value={{}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export {GlobalContextProvider}
export default GlobalContext