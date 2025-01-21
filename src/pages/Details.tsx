import { Book } from '@/context/BookContext'
import books from '@/mock/book'
import { useParams } from 'react-router-dom'

const Details = () => {
  const { id } = useParams()

  const book: Book = books.find((b) => b.id === Number(id))

  return (
    <>
      <h3>{book.title}</h3>
      <div>
        <p>- 저자 : {book.author}</p>
        <p>
          - 출판 : {book.publisher} | {book.year}
        </p>
        <p>- 가격 : {book.price}</p>
      </div>
    </>
  )
}

export default Details
