import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Form from './Form'
import Navbar from './Navbar'
import ListGroup from './ListGroup'
import ReviewDetails from './ReviewDetails'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container p-3">
        <ReviewDetails/>
        <Form />
        <ListGroup />
        <ToastContainer/>
      </div>
    </>
  )
}

export default App