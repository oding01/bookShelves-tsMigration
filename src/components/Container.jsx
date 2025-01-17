import BookListBox from '@/components/BookListBox'
import Creator from '@/components/Creator'

const Container = ({ type }) => {
  return (
    <div>
      {type === 'bookListBox' && <BookListBox />}
      {type === 'creator' && <Creator />}
    </div>
  )
}

export default Container
