import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'

export default function Layout() {
  const location = useLocation()
  const isLanding = location.pathname === '/'
  const isLearn = location.pathname === '/learn'

  return (
    <>
      <div className={`layout ${isLearn ? 'layout-full' : ''}`}>
        {!isLanding && <Header />}
        {!isLanding && <Nav />}
        <Main className={isLearn ? 'main-full' : ''}>
          <Outlet />
        </Main>
      </div>
    </>
  )
}
