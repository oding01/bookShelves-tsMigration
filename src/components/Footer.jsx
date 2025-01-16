import { Link } from 'react-router-dom'

const Footer = () => {
  // console.log('[Footer] -rerender') 리렌더링 안 됨
  return (
    <div style={{ backgroundColor: '#888' }}>
      Footer <Link to='/help'>고객센터</Link>
    </div>
  )
}

export default Footer
