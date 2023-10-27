import React from 'react'
import Button from '../Button/Button'
import Form from '../../components/Form'

const Modal = ({closeModalFn}) => {
  
  return (
    <div className='w-96 h-96'>
        <Button onClick={closeModalFn}>X</Button>
        <Form />
    </div>
  )
}

export default Modal