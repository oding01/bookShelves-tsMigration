import BookList from '@/components/BookList'
import SearchInput from '@/components/SearchInput'
import { BookContext } from '@/context/BookContext'
import BookListItem from '@/components/BookListItem'
const BookListBox = () => {
  console.log('[BookShelves] - rerender')

  return (
    <>
      <h3>나만의 책장</h3>
      <BookContext.Consumer>
        {(context) => <div>현재 읽고 있는 책 : {context.currentBook?.title || '없음'}</div>}
      </BookContext.Consumer>
      <SearchInput />
      <BookList>
        <BookListItem />
      </BookList>
    </>
  )
}

export default BookListBox
