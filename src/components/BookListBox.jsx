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
        {(storage) => <div>현재 읽고 있는 책 : {storage.currentBook?.title || '없음'}</div>}
      </BookContext.Consumer>
      <SearchInput />
      <BookList>
        <BookListItem />
      </BookList>
      {/* 만약 메모제이션으로 사용한다면
      <BookList2 />
      */}
      {/* <BookList2 /> */}
    </>
  )
}

export default BookListBox
