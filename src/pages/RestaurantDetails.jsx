import React from 'react';
import {useParams} from "react-router-dom";
import {useGlobalRestaurants} from "../contexts/restaurantsContext.jsx";

const RestaurantDetails = () => {
    const {id} = useParams()
    const {findRestaurent} = useGlobalRestaurants()
    const restaurant = findRestaurent(Number(id));


    return (
        <div className={'restaurent-details-main flex justify-center py-16'}>
            <div className="restaurent-card w-full sm:w-[600px] px-3">
                <div className="details border-b-2 border-black/40 pb-3 flex justify-between items-center">
                    <div className="left">
                        <h1 className={'text-3xl font-bold'}>{restaurant?.name}</h1>
                        <p>{restaurant?.address}</p>
                        <p>Average Rating: {restaurant?.averageRating}</p>
                    </div>
                    <div className="right">
                        <button className={'bg-red-500 text-white p-2 px-3 rounded'}>Add Review</button>
                    </div>
                </div>
                <div className="ratings mt-6">
                    <h1 className={'text-3xl font-bold'}>Reviews</h1>
                    <div className="all-reviews flex flex-col gap-5 py-4">
                        {
                            restaurant.ratings.map(rating => (
                                <div className={'ind-rating border-b-2 border-black/20 py-2'}>
                                    <div className="profile flex justify-between pr-2 items-start">
                                        <div className="details flex gap-2">
                                            <img src={rating.pp} alt="profile" className={'w-8 rounded-full'}/>
                                            <p className={'font-bold'}>{rating.revName}</p>
                                        </div>
                                        <div className="review bg-green-600 p-2">
                                            {rating.rating}
                                        </div>
                                    </div>
                                    <div className="comment">
                                        {rating.comment}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RestaurantDetails;