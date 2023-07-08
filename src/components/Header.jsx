import {useGlobalRestaurants} from "../contexts/restaurantsContext.jsx";

const Header = () => {
    const {cuisines, setSelectedCuisine} = useGlobalRestaurants()

    return (
        <div className={'header bg-green-500 text-white flex flex-col gap-2 sm:gap-4 justify-center items-center py-3 sm:py-6'}>
            <h1 className={'text-3xl sm:text-5xl font-bold'}>Food Ordering App</h1>

            <h2 className={'text-2xl sm:text-3xl'}>Select Your Cuisine:</h2>
            <div className="options flex gap-3 sm:gap-5">
                {
                    cuisines.map(({id, name}) => (
                        <button key={id} className={'bg-red-500 text-white p-2 px-3 rounded'} onClick={()=>setSelectedCuisine(id)}>{name}</button>
                    ))
                }
            </div>
        </div>
    )
        ;
};

export default Header;