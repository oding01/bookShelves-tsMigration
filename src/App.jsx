import '@/App.css'
import Container from '@/components/Container'
import { BookProvider } from '@/context/BookContext'
import { SearchProvider } from '@/context/SearhContext'

function App() {
  return (
    <>
      <BookProvider>
        <SearchProvider>
          <Container type='bookshelves'></Container>
          <Container type='creator'></Container>
        </SearchProvider>
      </BookProvider>
    </>
  )
}

export default App
