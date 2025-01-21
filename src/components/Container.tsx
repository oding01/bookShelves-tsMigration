import { ReactNode } from 'react'

// 레이아웃을 Container로 써라.
const Container = ({ title, children }: { title: string; children: ReactNode }) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export default Container
