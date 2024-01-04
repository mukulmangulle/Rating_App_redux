import React from 'react'
import { useDispatch } from 'react-redux';
import { editFeedback, removeFeedback } from './features/feedback/feedbackSlice';
import { toast } from 'react-toastify';

const ListIteam = ({feedback}) => {

     const dispatch= useDispatch()

       const handleDelete=(id)=>{
         if(window.confirm("Are You Sure?")){
            dispatch(removeFeedback(id))
            toast.error("Feedback Delete");
         }
       };

       const handleEdit =(feedback)=>{
         dispatch(editFeedback(feedback))
       }

    return (
        <li className={feedback.rating > 3 ?"list-group-item rounded-0 shadow-sm bg-success text-light" :"list-group-item rounded-0 shadow-sm bg-secondary text-light"}>
            <h1 className='display-5'>Rating:{feedback.rating}</h1>
            <h1 className='display-5'>Review:{feedback.review}</h1>
           
                <button className=' btn btn-warning btn-sm rounded-0 float-end'
                onClick={()=>handleEdit(feedback)}>Edit</button>
                
                <button className=' btn btn-danger btn-sm rounded-0 float-end'
                onClick={()=>handleDelete(feedback.id)}>Delete</button>
           
        </li>
    )
}

export default ListIteam;