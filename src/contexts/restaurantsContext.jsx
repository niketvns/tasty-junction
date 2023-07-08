import {createContext, useContext, useState, useEffect} from "react";
import {restaurantsData, cuisineData} from '../db/data.js'

const restaurantsContext = createContext()

const RestaurantsProvider = ({children}) => {
    const [restaurants, setRestaurants] = useState(restaurantsData);
    const [cuisines, setCuisines] = useState(cuisineData);
    const [selectedCuisine, setSelectedCuisine] = useState(null)

    const filteredCuisines = restaurants.filter(restaurant => restaurant.cuisine_id === selectedCuisine)

    const findRestaurent = (id) => {
        return restaurants.find(restaurant => restaurant.id === id);
    }

    return(
        <restaurantsContext.Provider value={{filteredCuisines,findRestaurent, restaurants, cuisines, selectedCuisine, setSelectedCuisine}}>
            {children}
        </restaurantsContext.Provider>
    )
}

const useGlobalRestaurants = () => useContext(restaurantsContext)

export {RestaurantsProvider, useGlobalRestaurants}