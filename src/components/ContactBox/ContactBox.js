import React from 'react'

const ContactBox = ({name, phone, email, account, regon, nip, krs}) => {
  return (
    <div className='bg-gray-100 p-10 rounded-2xl'>
            <h5>{name}</h5>
        <div className='flex flex-col pt-5'>
            <span className='font-light'>{phone}</span>
            <span className='text-cyan-800'>{email}</span>
        </div>
    </div>
  )
}

export default ContactBox