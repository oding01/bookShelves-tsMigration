import { createContext, useState } from 'react'

export const BookContext = createContext({
  currentBook: null,
  savedCurrentBook: (bookTitle) => {},
})

export const BookProvider = ({ children }) => {
  const [currentBook, setCurrentBook] = useState(() => {
    const savedBookTitle = localStorage.getItem('currentBook')
    return savedBookTitle ? { title: savedBookTitle } : null
  })

  // 상태를 바로 전달하지 않고, 상태 변경하는 함수로 전달
  const savedCurrentBook = (book) => {
    const savedBookTitle = localStorage.getItem('currentBook')

    // 이미 같은 책이 저장되어 있다면 상태 변경 및 리렌더링 방지
    if (savedBookTitle === book.title) return

    setCurrentBook(book)
    localStorage.setItem('currentBook', book.title)
  }

  return (
    <BookContext.Provider value={{ currentBook, savedCurrentBook }}>
      {children}
    </BookContext.Provider>
  )
}
