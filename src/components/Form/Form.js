import React from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'

const Form = () => {
  return (
    <div className="max-w-xl mx-auto py-12 flex flex-col">
        <h3 className='text-center text-3xl text-gray-700 font-bold'>Formularz kontaktowy</h3>
        <div className='mt-20'>
            <form autoComplete='off'>
                <div className='grid sm:grid-cols-2 gap-x-8 pb-6'>
                    <Input name='Imię'/>
                    <Input name='Nazwisko'/>
                </div>
                <Input tag='textarea' maxLength={250} name='Wiadomość'/>
                <div className='mt-8'>
                    <Button>Wyślij wiadomość</Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Form