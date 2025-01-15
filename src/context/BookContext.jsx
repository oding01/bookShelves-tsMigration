import { createContext, useState } from 'react'

export const BookContext = createContext({
  currentBook: null,
  setCurrentBook: (state) => {},
})

export function BookProvider({ children }) {
  const [currentBook, setCurrentBook] = useState('')

  return (
    <BookContext.Provider value={{ currentBook, setCurrentBook }}>{children}</BookContext.Provider>
  )
}
