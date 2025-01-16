import { SearchContext } from "@/context/SearhContext"
import { useContext } from "react"

export const useSearch = () => {
  const context = useContext(SearchContext)
  
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider')
  }
 
  const { searchBook, searching, filteredBooks } = context
 
  return {
    searchBook,
    searching, 
    filteredBooks
  }
 }