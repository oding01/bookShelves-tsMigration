import Container from '@/components/Container'
import { BookProvider } from '@/context/BookContext'
import { SearchProvider } from '@/context/SearhContext'

const Home = () => {
  return (
    <>
      <BookProvider>
        <SearchProvider>
          <Container type='bookListBox'></Container>
        </SearchProvider>
      </BookProvider>
      <Container type='creator'></Container>
    </>
  )
}

export default Home
