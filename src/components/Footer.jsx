import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#888' }}>
      Footer <Link to='/help'>고객센터</Link>
    </div>
  )
}

export default Footer
