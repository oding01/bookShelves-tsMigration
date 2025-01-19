// 레이아웃을 Container로 써라.
const Container = ({title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export default Container
