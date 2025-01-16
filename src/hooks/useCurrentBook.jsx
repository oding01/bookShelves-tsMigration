import { BookContext } from '@/context/BookContext'
import { useContext } from 'react'

export const useCurrentBook = () => {
  const context = useContext(BookContext)

  if (!context) {
    throw new Error('useCurrentBook must be used within BookProvider')
  }

  const { currentBook, savedCurrentBook } = context

  return {
    currentBook,
    savedCurrentBook,
  }
}
