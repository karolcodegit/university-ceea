import React from 'react'

const Paragraph = ({children, firstLetter}) => {
    const letter = firstLetter ? 'first-letter:text-7xl first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-light' : null;
  return (
    <p className={`${letter} text-base max-md:text-sm py-5 leading-7 text-gray-800`}>{children}</p>
  )
}

export default Paragraph