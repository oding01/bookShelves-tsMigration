import { memo } from 'react'

const Creator = memo(function Creator() {
  console.log('[Creator] - rerender')
  return (
    <>
      <h3>만든 이</h3>
      <p>이어진</p>
      <p>slimin92@naver.com</p>
    </>
  )
})

export default Creator
