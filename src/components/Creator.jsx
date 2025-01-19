import { memo } from 'react'

const Creator = () => {
  console.log('[Creator] - rerender')
  return (
    <>
      <p>이어진</p>
      <p>slimin92@naver.com</p>
    </>
  )
}

export default memo(Creator)
