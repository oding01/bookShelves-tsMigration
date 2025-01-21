import BookListBox from '@/components/BookListBox'
import Container from '@/components/Container'
import Creator from '@/components/Creator'
import { BookProvider } from '@/context/BookContext'
import { SearchProvider } from '@/context/SearchContext'


const Home = () => {
  return (
    <>
      <BookProvider>
        <SearchProvider>
          <Container title='나만의 책장'>
            <BookListBox />
          </Container>
        </SearchProvider>
      </BookProvider>
      <Container title='만든 이'>
        <Creator />
      </Container>
    </>
  )
}

export default Home
