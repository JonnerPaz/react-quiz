import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'

export default function Layout() {
  const location = useLocation()
  const isLanding = location.pathname === '/'
  const isLearn = location.pathname === '/learn'

  useEffect(() => {
    if (isLearn) {
      document.body.classList.add('page-learn')
    }
    return () => document.body.classList.remove('page-learn')
  }, [isLearn])

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
