import BookItem2 from '@/components/BookItem2'
import { useCurrentBook } from '@/hooks/useCurrentBook'
import { useSearch } from '@/hooks/useSearchBook'
import { useCallback } from 'react'

const BookList2 = () => {
  console.log('[BookList] -rerender')
  const { filteredBooks } = useSearch()
  const { savedCurrentBook } = useCurrentBook()

  const handleSave = useCallback(savedCurrentBook, [])

  return (
    <>
      {filteredBooks.map((book) => (
        <BookItem2 key={book.id} book={book} savedCurrentBook={handleSave} />
      ))}
    </>
  )
}

export default BookList2
