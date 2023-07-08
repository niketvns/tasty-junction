import {GrClose} from 'react-icons/gr'
import {useState} from "react";
import {useGlobalRestaurants} from "../contexts/restaurantsContext.jsx";

const ReviewModel = ({setIsComment, restaurantId}) => {
    const [comment, setComment] = useState({
        rating: 1,
        comment: "",
        revName: "Niket Mishra",
        pp: "https://res.cloudinary.com/dyzu4lzqz/image/upload/v1687356575/sociogram/xfiwt6zmylz1pcy93fih.png"
    })
    const {commentHandler} = useGlobalRestaurants()

    const changeHandler = (e) => {
        const {name, value} = e.target
        setComment(prevState => ({...prevState, [name]: value}))
    }

    const submitHandler = () => {
        console.log(comment)
        if (comment.rating && comment.comment){
            commentHandler(comment, restaurantId)
            setIsComment(false)
        }
    }

    return (
        <div className={'review-model bg-black/40 fixed inset-0 flex justify-center items-center'}>
            <div className="review-card bg-white p-8 flex flex-col gap-10 rounded relative">
                <div className="close absolute top-4 right-4 cursor-pointer text-xl"
                     onClick={() => setIsComment(false)}>
                    <GrClose/>
                </div>
                <h1 className={'text-2xl border-b-2 border-black/40'}>Add Your Review</h1>
                <div className="div flex justify-start w-full gap-10">
                    <p>Rating: </p>
                    <select name="rating" id="rating" required value={comment.rating} className={'border flex-1 max-w-fit outline-0 p-2 rounded'}
                            onChange={changeHandler}>
                        <option disabled>--select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="div flex justify-between w-full gap-2">
                    <p>Comment: </p>
                    <textarea name="comment" id="comment" value={comment.comment} placeholder={'Write Comment...'} cols="30" rows="3" required
                              className={'p-2 border outline-0 resize-none rounded'}
                              onChange={changeHandler}></textarea>
                </div>
                <div className="btn flex justify-center">
                    <button className={'bg-red-500 text-white p-2 px-5 rounded'} onClick={submitHandler}>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewModel;