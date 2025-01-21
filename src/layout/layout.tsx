import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <section style={{ width: 440 }}>
      <Header />
      <Outlet />
      <Footer />
    </section>
  )
}

export default Layout
