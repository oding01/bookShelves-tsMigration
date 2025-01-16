import BookList from '@/components/BookList'
import SearchInput from '@/components/SearchInput'
import { BookContext } from '@/context/BookContext'

const BookShelves = () => {
  console.log('[BookShelves] - rerender')

  return (
    <>
      <h3>나만의 책장</h3>
      <BookContext.Consumer>
        {(saved) => <div>현재 읽고 있는 책 : {saved.currentBook?.title || '없음'}</div>}
      </BookContext.Consumer>
      <SearchInput />
      <BookList />
    </>
  )
}

export default BookShelves
