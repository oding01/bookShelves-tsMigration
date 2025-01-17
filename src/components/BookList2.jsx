import BookItem2 from '@/components/BookListItem2'
import { useBook } from '@/context/BookContext'
import { useSearch } from '@/context/SearhContext'

import { useCallback } from 'react'

const BookList2 = () => {
  console.log('[BookList] -rerender')
  const { filteredBooks } = useSearch()
  const { saveBook } = useBook()

  const handleSave = useCallback(saveBook, [])

  return (
    <>
      {filteredBooks.map((book) => (
        <BookItem2 key={book.id} book={book} saveBook={handleSave} />
      ))}
    </>
  )
}

export default BookList2
