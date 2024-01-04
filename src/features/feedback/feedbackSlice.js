import { createSlice } from "@reduxjs/toolkit";

const feedbackSlice = createSlice({
    name: "feedbacks",
    initialState: {
        feedbacks: [{ id: 1, rating: 5, review: "good product" }],
        edit: {
            feedback: {},
            isEdit: false,
        }
    },
    reducers: {
        //1
        removeFeedback: (state, action) => {
            return {
                ...state,
                feedbacks: state.feedbacks.filter((item) => item.id !== action.payload),
            };
        },
        //2
        addFeedback: (state, action) => {
            return {
                ...state,
                feedbacks: [action.payload, ...state.feedbacks],
            };
        },
        //3
        editFeedback: (state, action) => {
            return {
                ...state,
                edit: {
                    feedback: action.payload,
                    isEdit: true,
                },
            };
        },
        //4
        updateFeedback: (state, action) => {
            return {
                ...state,
                feedbacks: state.feedbacks.map(item => item.id === action.payload.id ?
                    action.payload : item),
              edit :{ feedback: {}, isEdit: false},
            }
        }

    },
});

export const { removeFeedback, addFeedback, editFeedback, updateFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;