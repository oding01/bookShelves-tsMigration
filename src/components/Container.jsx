import BookShelves from '@/components/BookShelves'
import Creator from '@/components/Creator'

function Container({ type }) {
  return (
    <div>
      {type === 'bookshelves' && <BookShelves />}
      {type === 'creator' && <Creator />}
    </div>
  )
}

export default Container
