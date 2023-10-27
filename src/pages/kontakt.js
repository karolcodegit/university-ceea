import React from 'react'
import ContactBox from '../components/ContactBox/ContactBox'
import Form from '../components/Form/Form'
import Seo from "../components/seo"

const Contact = () => {
  return (
    <>
        <div className='px-6 py-20'>
        <div className='max-w-6xl grid lg:grid-cols-3 max-lg:grid-col-2 gap-x-8 gap-y-10 mx-auto py-24 border-b'>
            <div className=''>
              <h3 className='font-bold text-3xl mb-4'>Kontakt</h3>
              <span className='text-sm font-light'>Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.</span>
            </div>
            <div className='grid grid-cols-2 gap-8 col-span-2'>
              <ContactBox name='Natalia Znojkiewicz' phone='695245436' email='nznojkiewicz@ump.edu.pl'/>
              <ContactBox name='Anna Kluzik' phone='505114942' email='akluzik@wp.pl'/>
            </div>
            
        </div>

        <div className='max-w-6xl grid lg:grid-cols-3 max-lg:grid-col-2 gap-x-8 gap-y-10 mx-auto py-10 px-4 border-b'>
            <div className=''>
              <h3 className='font-bold text-3xl mb-4'>Europejska Fundacja ds. Szkolenia w Anestezjologii</h3>
              <span className='text-sm font-light'>Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.</span>
            </div>
            <div className='grid grid-cols-2 gap-8 col-span-2'>
              <ContactBox name='ul. Sokolnicka 56' phone='62-021 Paczkowo' email='sekretariat@ceea.org.pl'/>
              <div className='bg-gray-100 p-10 rounded-2xl'>
                <div className='flex flex-col pt-5'>
                    <span className='font-light py-1'>Konto: 47 1140 2004 0000 3202 8319 5381</span>
                    <span className='font-light py-1'>REGON: 301341024</span>
                    <span className='font-light py-1'>NIP: 777-314-61-00</span>
                    <span className='font-light py-1'>KRS: 0000347155</span>
                </div>
              </div>
            </div>
            
        </div>



        <Form />
        </div>
    </>
  )
}

export const Head = () => <Seo title="Kontakt" />

export default Contact