import { createContext, useContext, useState } from 'react'
import books from '@/mock/book'

export const SearchContext = createContext({
  searchTerm: null,
  searchByTerm: (term) => {},
  filteredBooks: books,
})

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchBook] = useState('')

  const searchByTerm = (term) => {
    setSearchBook(term)
  }

  // 검색 시 BookList 컴포넌트만 리렌더링 되게 하기 위함. (실시간 검색)
  const filteredBooks = searchTerm
    ? books.filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()))
    : books

  return (
    <SearchContext.Provider value={{ searchTerm, searchByTerm, filteredBooks }}>
      {children}
    </SearchContext.Provider>
  )
}

// 커스텀 훅
export const useSearch = () => {
  const context = useContext(SearchContext)
  
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider')
  }
 
  const { searchTerm, searchByTerm, filteredBooks } = context
 
  return {
    searchTerm,
    searchByTerm, 
    filteredBooks
  }
 }
