import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import './layout.scss'


//
const Layout = () => {
  return (
      <div className='layoutContainer'>
         <Header/>
          <Outlet/>
    </div>
  )
}

export default Layout