import {createContext, useContext, useState, useEffect} from "react";

const restaurantsContext = createContext()

const RestaurantsProvider = ({children}) => {


    return(
        <restaurantsContext.Provider value={''}>
            {children}
        </restaurantsContext.Provider>
    )
}

const useGlobalRestaurants = () => useContext(restaurantsContext)

export {RestaurantsProvider, restaurantsContext}