import { createContext, useState, useMemo } from 'react'
import books from '@/mock/book'

export const SearchContext = createContext({
  searchBook: null,
  setSearchBook: (state) => {},
  filteredBooks: books,
})

export const SearchProvider = ({ children }) => {
  const [searchBook, setSearchBook] = useState('')

  // 검색 시 BookList 컴포넌트만 리렌더링 되게 하기 위함. (실시간 검색)
  const value = useMemo(() => {
    const filteredBooks = searchBook
      ? books.filter((book) => book.title.toLowerCase().includes(searchBook.toLowerCase()))
      : books

    return {
      searchBook,
      setSearchBook,
      filteredBooks,
    }
  }, [searchBook])

  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
}
