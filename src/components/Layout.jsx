import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'

export default function Layout() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <>
      <div className="layout">
        {!isLanding && <Header />}
        {!isLanding && <Nav />}
        <Main>
          <Outlet />
        </Main>
      </div>
    </>
  )
}
