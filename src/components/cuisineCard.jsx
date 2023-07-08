import {useNavigate} from "react-router-dom";

const CuisineCard = ({cuisine, restaurentName, restaurentId}) => {

    const navigate = useNavigate()

    return (
        <div className={'cuisine-card w-56 border'}>
            <img src={cuisine.imgSrc} alt="image" className={'w-full object-fill aspect-square rounded-t cursor-pointer'} onClick={()=>navigate(`/restaurant-detail/${restaurentId}`)}/>
            <div className="details px-3 py-2">
                <p className={'font-bold'}>{cuisine.name}</p>
                <p>Rs. {cuisine.price} for {cuisine.qty}</p>
                <p>{restaurentName}</p>
            </div>
        </div>
    );
};

export default CuisineCard;