import React from 'react'
import Title from '../Title/Title'

const Box = ({image, title, description}) => {
  return (
    <>
        <div className=' h-auto hover:scale-110'>
            <div className='max-w-full max-h-full'>
                <div className='h-96 w-full relative'>
                    <img className='rounded-2xl object-cover h-full w-full overflow-clip' src={image} alt={title} />
                </div>
            <div className='py-8'>
                <Title tag='h5'>{title}</Title>
                <p className='text-gray-800 text-sm font-light leading-6 pt-5'>{description}</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default Box