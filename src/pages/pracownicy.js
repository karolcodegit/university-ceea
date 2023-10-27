import React from 'react'
import Title from '../components/Title/Title'
import Paragraph from '../components/Paragraph/Paragraph'
import Line from '../components/Line/Line'
import Employee from '../components/Employee/Employee'
import Seo from "../components/seo"

const Pracownicy = () => {
  return (
    <>
        
        <div className='max-w-7xl mx-auto py-36 px-7'>
            <div className='flex flex-col mb-20'>
                <Title tag='h1'>Pracownicy</Title>
                <Line/>
                <Paragraph>
                    Ucz się od prawdziwych ekspertów z różnych dziedzin
                </Paragraph>
            </div>


            <div className='flex max-lg:flex-col py-20 border-b mx-auto'>
                <div className='lg:w-1/4 max-md:w-full'>
                    <div className='max-md:text-center py-9'>
                        <Title tag='h3'>Dyrektor</Title>
                    </div>
                </div>
                <div className='grid xl:grid-cols-3 gap-x-4 lg:grid-cols-2 max-md:grid-cols-1 max-md:w-full gap-y-6 mx-auto'>
                    <Employee name='Karol Znojkiewicz' degree='Web developer'/>
                </div>
            </div>


            <div className='flex max-lg:flex-col py-20 mx-auto'>
                <div className='lg:w-1/4 max-md:w-full'>
                    <div className='max-md:text-center py-9'>
                        <Title tag='h3'>Pracownicy Naukowii</Title>
                    </div>
                </div>
                <div className='grid xl:grid-cols-3 gap-x-4 lg:grid-cols-2 max-md:grid-cols-1 max-md:w-full gap-y-9 mx-auto'>
                    <Employee name='Karol Znojkiewicz' degree='Web developer'/>
                    <Employee name='Karol Znojkiewicz' degree='Web developer'/>
                    <Employee name='Karol Znojkiewicz' degree='Web developer'/>
                </div>
            </div>

        </div>
    </>
  )
}

export const Head = () => <Seo title="Pracownicy" />

export default Pracownicy