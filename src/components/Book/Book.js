import React from 'react'
import { ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import Title from '../Title/Title'

const Book = ({image,title,editor,year,price,publisher,coverType,EAN }) => (
        <div className='max-w-screen-xl mx-auto flex justify-around py-20 px-4 border-b last-of-type:border-none'>
            <div className='flex max-md:flex-col max-w-4xl '>
                <div className=''>
                        <img className='flex-shrink-0 max-md:w-56 mx-auto' src={image.fluid.src} alt={title} />
                </div>
                <div className=' px-10 grow w-full'>
                    <div className='flex flex-col py-4'>
                        {/* <button className='bg-green-700 inline-flex'>Dramat</button> */}
                        <Title tag='h4'>{title}</Title>
                        <div className='py-3'>
                            <span>Autor:</span> <span>red. {editor}</span>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <div className='py-1'>
                            <span className='font-light text-sm pr-3'>Wydawca:</span><span className='font-bold'>{publisher}</span>
                        </div>
                        <div className='py-1'>
                            <span className='font-light text-sm mr-3'>Rok wydania:</span><span className='font-bold'>{year}</span>
                        </div>
                        <div className='py-1'>
                            <span className='font-light text-sm mr-3'>Typ okładki:</span><span className='font-bold'>{coverType} okładka</span>
                        </div>
                        <div className='py-1'>
                            <span className='font-light text-sm mr-3'>EAN:</span><span className='font-bold'>{EAN}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' bg-gray-100 rounded-md flex flex-col self-start w-max'>
                <div className='p-5 text-center'>
                    <span className='font-light text-sm pr-3'>Nasza cena: </span><span className='font-bold text-3xl'>{price} zł</span>
                </div>
                <div className='border-t p-5 flex items-center'>
                    <ClockIcon className="h-6 w-6" aria-hidden="true" />
                    <span className='font-light text-sm pl-4'>Wysyłamy w 24h</span>
                </div>
                <div className='border-t p-5 flex items-center'>
                    <CurrencyDollarIcon className="h-6 w-6" aria-hidden="true" />
                    <span className='font-light text-sm pl-4'>Sprawdź koszt dostawy</span>
                </div>

            </div>
        </div>
)

export default Book