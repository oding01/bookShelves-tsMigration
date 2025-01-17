import { useCurrentBook } from '@/hooks/useCurrentBook'
import { useSearch } from '@/hooks/useSearchBook'
import { memo } from 'react'
import { Link } from 'react-router-dom'

const BookListItem = () => {
  console.log('[BookItem] -rerender')
  const { savedCurrentBook } = useCurrentBook()
  const { filteredBooks } = useSearch()

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
            onClick={() => savedCurrentBook({ title: book.title })}
          >
            읽기
          </button>
        </div>
      ))}
    </>
  )
}

export default memo(BookListItem)
