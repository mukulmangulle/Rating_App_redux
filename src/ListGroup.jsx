import React from 'react'
import ListIteam from './ListIteam'
import { useSelector } from 'react-redux'

const ListGroup = () => {


    const { feedbacks } = useSelector((state) => state.feedbacks);

    return (
        <ul className='list-group rounded-0 shadow-sm'>
            {
                feedbacks.map(feedback => <ListIteam key={feedback.id} feedback={feedback} />)
            }
        </ul>
    )
}

export default ListGroup;