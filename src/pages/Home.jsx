import Header from "../components/Header.jsx";
import {useGlobalRestaurants} from "../contexts/restaurantsContext.jsx";
import CuisineCard from "../components/cuisineCard.jsx";

const Home = () => {
    const {filteredCuisines} = useGlobalRestaurants()

    return (
        <div className={'home-main'}>
            <Header/>
            {
                filteredCuisines.length ?
                    <div className={'all-cuisines flex flex-col items-center gap-5 px-3'}>
                        {
                            filteredCuisines.map((restaurant) => (
                                <div key={restaurant.id} className={'py-3'}>
                                    <h1 className={'text-2xl font-bold py-2'}>Dishes by {restaurant.name}</h1>
                                    <div className={'flex gap-2 flex-wrap'}>
                                        {
                                            restaurant.menu.map((cuisine, index) => (
                                                <CuisineCard key={index} restaurentId={restaurant.id} restaurentName={restaurant.name} cuisine={cuisine}/>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div> :
                    <div className={'template h-44 flex justify-center items-center'}>
                        <h1 className={'text-xl sm:text-3xl text-black/20 select-none'}>Select Cuisine to see Details</h1>
                    </div>
            }
        </div>
    );
};

export default Home;