import { SearchContext } from '@/context/SearhContext'
import { memo, useContext } from 'react'

const SearchInput = () => {
  const { setSearchBook } = useContext(SearchContext)

  return (
    <>
      <input placeholder='검색' onChange={(e) => setSearchBook(e.target.value)} />
    </>
  )
}

export default memo(SearchInput)
