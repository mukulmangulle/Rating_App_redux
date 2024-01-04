import React from 'react'
import { useSelector } from 'react-redux';

const ReviewDetails = () => {

  const { feedbacks } = useSelector((state) => state.feedbacks);

  const avgRating = feedbacks.reduce((p,c)=>{
    return p+c.rating/ feedbacks.length;
  },0);

  return (
       <span className='d-flex align-items-center justify-content-between'>
        <p className="text-secondary">Total Reviews :{feedbacks.length} </p>
        <p className="text-secondary">Average Reviws :{avgRating}</p>
       </span>
  )
}

export default ReviewDetails