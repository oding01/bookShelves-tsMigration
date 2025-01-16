import { createContext, useState } from 'react'
import books from '@/mock/book'

export const SearchContext = createContext({
  searchBook: null,
  searching: (term) => {},
  filteredBooks: books,
})

export const SearchProvider = ({ children }) => {
  const [searchBook, setSearchBook] = useState('')

  const searching = (term) => {
    setSearchBook(term)
  }

  // 검색 시 BookList 컴포넌트만 리렌더링 되게 하기 위함. (실시간 검색)

  const filteredBooks = searchBook
    ? books.filter((book) => book.title.toLowerCase().includes(searchBook.toLowerCase()))
    : books

  return (
    <SearchContext.Provider value={{ searchBook, searching, filteredBooks }}>
      {children}
    </SearchContext.Provider>
  )
}
