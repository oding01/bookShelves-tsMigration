import { createContext, useState, useMemo } from 'react'
import books from '@/mock/book'

export const SearchContext = createContext({
  searchBook: null,
  setSearchBook: (state) => {},
  filteredBooks: books,
})

export function SearchProvider({ children }) {
  const [searchBook, setSearchBook] = useState('')

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
