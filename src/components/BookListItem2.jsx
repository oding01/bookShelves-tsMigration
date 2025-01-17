import { memo } from 'react'
import { Link } from 'react-router-dom'

const BookItem2 = ({ book, saveBook }) => {
  console.log('[BookItem] -rerender')
  return (
    <div>
      <Link to={`/details/${book.id}`}>
        <span>
          {book.title} - {book.author}
        </span>
      </Link>
      <button
        style={{ padding: '0.2rem 0.4rem', marginLeft: 4 }}
        onClick={() => saveBook({ title: book.title })}
      >
        읽기
      </button>
    </div>
  )
}

export default memo(BookItem2)
