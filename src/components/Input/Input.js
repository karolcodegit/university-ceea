import React from 'react'
import PropTypes from 'prop-types'

const Input = ({tag: Tag, name, maxLength}) => {
  return (
    <div className='flex flex-col'>
        <label className='text-gray-900 leading-10 font-medium text-sm' htmlFor={name}>{name}</label>
        <Tag 
            type="text"
            name={name}
            id={name}
            maxLength={maxLength}
            placeholder=" "
            className={Tag !== 'textarea' ? 
                'text-gray-900 border rounded-md border-gray-400 leading-3 text-sm ring-inset shadow-black ring-offset-0 drop-shadow py-2 px-4' 
                : 
                'text-gray-900 border rounded-md border-gray-400 leading-3 text-sm ring-inset shadow-black ring-offset-0 drop-shadow py-2 px-4 h-52'} />
    </div>
  )
}

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
}
Input.defaultProps = {
    tag: 'input',
    maxLength: 50,
}

export default Input