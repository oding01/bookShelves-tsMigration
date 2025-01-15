import { BookContext } from '@/context/BookContext'
import { SearchContext } from '@/context/SearhContext'
import { memo, useContext } from 'react'

const BookList = memo(function BookList() {
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
          <span>
            {book.title} - {book.author}
          </span>
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
})

export default BookList
