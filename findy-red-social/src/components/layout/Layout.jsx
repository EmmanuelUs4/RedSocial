import Header from '../header/Header'
import './layout.scss'
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
      <div className='layoutContainer'>
         <Header/>
          <Outlet/>
    </div>
  );
};

export default Layout;
