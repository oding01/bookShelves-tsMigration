import { createContext, useContext, useState } from 'react'

export const BookContext = createContext({
  currentBook: null,
  saveCurrentBook: (bookTitle) => {},
})

export const BookProvider = ({ children }) => {
  const [currentBook, setCurrentBook] = useState(() => {
    const localSavedBook = localStorage.getItem('currentBook')
    return localSavedBook ? { title: localSavedBook } : null
  })
  // 변하지 않는 id 값을 저장하자!

  // 상태를 바로 전달하지 않고, 상태 변경하는 함수로 전달
  const saveCurrentBook = (book) => {
    const localSavedBook = localStorage.getItem('currentBook')

    // 이미 같은 책이 저장되어 있다면 상태 변경 및 리렌더링 방지
    if (localSavedBook === book.id) return

    setCurrentBook(book)
    localStorage.setItem('currentBook', JSON.stringify(book))
  }

  return (
    <BookContext.Provider value={{ currentBook, saveCurrentBook }}>{children}</BookContext.Provider>
  )
}

// 커스텀 훅
export const useBook = () => {
  const context = useContext(BookContext)

  if (!context) {
    throw new Error('useCurrentBook must be used within BookProvider')
  }

  const { currentBook, saveCurrentBook } = context

  return {
    currentBook,
    saveCurrentBook,
  }
}
