import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addFeedback, updateFeedback } from './features/feedback/feedbackSlice';
import { toast } from 'react-toastify';

const Form = () => {
    
     const dispatch= useDispatch();
     
     const {edit}= useSelector((state) => state.feedbacks);

     const [rating, setRating]=useState(1)
     const[review, setReview]= useState("")

     const handleSubmit =(e)=>{
        e.preventDefault();
       if(edit.isEdit){
         dispatch(updateFeedback({
            id:edit.feedback.id,
            rating,
            review,
         }))
       }
       else{
        dispatch(
            addFeedback({
                id: crypto.randomUUID(),
                rating,
                review,
            })
        );
       }
        toast.success("Feedback saved")
        setRating(1);
        setReview("");
     };

     useEffect(()=>{
        setRating(edit.feedback.rating)
        setReview(edit.feedback.review)
     },[edit]);

    return (
        <form className='my-2' onSubmit={handleSubmit}>
             <select className='form-control rounded-0 my-2'
             onChange={(e)=> setRating(e.target.value)}
             value={rating}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
             </select>
             <textarea className='form-control rounded-0 my-2'
              placeholder='Enter Your Feedback Here...'
              onChange={(e)=> setReview(e.target.value)}
              value={review}
              required></textarea>
              <button className="btn btn-success rounded-0 w-100">Save</button>
        </form>

    )
}

export default Form