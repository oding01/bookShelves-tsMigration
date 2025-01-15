import Container from '@/components/Container'
import { BookProvider } from '@/context/BookContext'
import { SearchProvider } from '@/context/SearhContext'

const Home = () => {
  return (
    <BookProvider>
      <SearchProvider>
        <Container type='bookshelves'></Container>
        <Container type='creator'></Container>
      </SearchProvider>
    </BookProvider>
  )
}

export default Home
