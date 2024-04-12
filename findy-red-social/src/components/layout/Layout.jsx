import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'



const Layout = () => {
  return (
      <div>
          <Outlet/>
    </div>
  )
}

export default Layout