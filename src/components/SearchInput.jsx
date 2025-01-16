import { SearchContext } from '@/context/SearhContext'

const SearchInput = () => {
  console.log('[SearchInput] -rerender')

  return (
    <>
      {/* SearchInput 컴포넌트의 리렌더링 방지 Consumer*/}
      <SearchContext.Consumer>
        {(context) => (
          <input placeholder='검색' onChange={(e) => context.searching(e.target.value)} />
        )}
      </SearchContext.Consumer>
    </>
  )
}

export default SearchInput
