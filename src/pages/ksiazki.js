import React from 'react'
import Book from '../components/Book/Book'
import Seo from "../components/seo"
import { graphql } from 'gatsby'

const Books = ({data}) => {
  const {allDatoCmsBook: {nodes}} = data;
  return (
    <>
        <div className='py-32'>
          {nodes.map(book => (
             <Book key={book.title} {...book} />
          ))}
        </div>
    </>
  )
}



export const query = graphql`
  query MyQuery {
    allDatoCmsBook {
      nodes {
        title
        price
        publisher
        editor
        year
        image {
          fluid {
            src
          }
        }
      }
    }
  }
`


export const Head = () => <Seo title="Książki" />

export default Books