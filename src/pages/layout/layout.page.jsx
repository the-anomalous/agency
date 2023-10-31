import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from 'components'
import './layout.styles.scss'

function Layout() {
  return (
    <>
      <Navbar />
      <main className='layout'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
