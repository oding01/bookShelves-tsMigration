import { ReactNode } from 'react'

const BookList = ({ children }: { children: ReactNode }) => {
  console.log('[BookList] -rerender')

  return <div>{children}</div>
}

export default BookList
