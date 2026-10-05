import { Outlet } from 'react-router-dom'
import Header from './Header'
import Nav from './Nav'
import Main from './Main'

export default function Layout() {
  return (
    <>
      <div className="layout">
        <Header />
        <Nav />
        <Main>
          <Outlet />
        </Main>
      </div>
    </>
  )
}
