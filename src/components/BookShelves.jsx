import BookList from '@/components/BookList'
import SearchInput from '@/components/SearchInput'
import { BookContext } from '@/context/BookContext'
import books from '@/mock/book'
import { useContext, useEffect } from 'react'

const BookShelves = () => {
  console.log('[BookShelves] - rerender')
  const { currentBook, setCurrentBook } = useContext(BookContext)

  useEffect(() => {
    const savedBookTitle = localStorage.getItem('currentBook')
    if (savedBookTitle) {
      const book = books.find((b) => b.title === savedBookTitle)
      if (book) setCurrentBook(book)
    }
  }, [])

  return (
    <>
      <h3>나만의 책장</h3>
      <div>현재 읽고 있는 책 : {currentBook?.title || '없음'}</div>
      <SearchInput />
      <BookList />
    </>
  )
}

export default BookShelves
