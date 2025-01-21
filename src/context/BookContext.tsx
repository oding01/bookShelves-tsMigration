import { createContext, ReactNode, useContext, useState } from 'react'

export interface Book {
  id: number
  title: string
  author: string
  publisher: string
  year: number
  price: number
}

interface BookContextType {
  currentBook: { title: string } | null
  saveCurrentBook: (book: Book) => void
}

export const BookContext = createContext<BookContextType>({
  currentBook: null,
  saveCurrentBook: (book) => {},
})

export const BookProvider = ({ children }: { children: ReactNode }) => {
  const [currentBook, setCurrentBook] = useState(() => {
    const localSavedBook: Book = JSON.parse(localStorage.getItem('currentBook'))
    return localSavedBook ? { title: localSavedBook.title } : null
  })

  // 상태를 바로 전달하지 않고, 상태 변경하는 함수로 전달
  const saveCurrentBook = (book: Book) => {
    const localSavedBook: Book = JSON.parse(localStorage.getItem('currentBook'))

    // 이미 같은 책이 저장되어 있다면 상태 변경 및 리렌더링 방지
    if (localSavedBook?.id === book.id) return

    setCurrentBook({ title: book.title })
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
