import { createContext, useContext, useState } from 'react'

export const BookContext = createContext({
  currentBook: null,
  saveBook: (bookTitle) => {},
})

export const BookProvider = ({ children }) => {
  const [currentBook, setCurrentBook] = useState(() => {
    const savedBookTitle = localStorage.getItem('currentBook')
    return savedBookTitle ? { title: savedBookTitle } : null
  })

  // 상태를 바로 전달하지 않고, 상태 변경하는 함수로 전달
  const saveBook = (book) => {
    const savedBookTitle = localStorage.getItem('currentBook')

    // 이미 같은 책이 저장되어 있다면 상태 변경 및 리렌더링 방지
    if (savedBookTitle === book.title) return

    setCurrentBook(book)
    localStorage.setItem('currentBook', book.title)
  }

  return <BookContext.Provider value={{ currentBook, saveBook }}>{children}</BookContext.Provider>
}

// 커스텀 훅
export const useBook = () => {
  const context = useContext(BookContext)

  if (!context) {
    throw new Error('useCurrentBook must be used within BookProvider')
  }

  const { currentBook, saveBook } = context

  return {
    currentBook,
    saveBook,
  }
}
