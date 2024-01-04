import { configureStore } from "@reduxjs/toolkit";
import feedbackReduser from './feedback/feedbackSlice'

const sotre= configureStore({
    reducer:{
       feedbacks: feedbackReduser,
    }
})

export default sotre;