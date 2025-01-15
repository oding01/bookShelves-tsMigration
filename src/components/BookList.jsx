import { BookContext } from '@/context/BookContext'
import { SearchContext } from '@/context/SearhContext'
import { memo, useContext } from 'react'
import { Link } from 'react-router-dom'

const BookList = () => {
  console.log('[BookList] -rerender')
  const { filteredBooks } = useContext(SearchContext)
  const { setCurrentBook } = useContext(BookContext)

  function savedCurrentBook(book) {
    setCurrentBook(book)
    localStorage.setItem('currentBook', book.title)
  }

  return (
    <>
      {filteredBooks.map((book) => (
        <div key={book.id}>
          <Link to={`/details/${book.id}`}>
            <span>
              {book.title} - {book.author}
            </span>
          </Link>
          <button
            style={{ padding: '0.2rem 0.4rem', marginLeft: 4 }}
            onClick={() => savedCurrentBook(book)}
          >
            읽기
          </button>
        </div>
      ))}
    </>
  )
}

export default memo(BookList)
