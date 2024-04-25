import { Outlet } from "react-router-dom";
import './Layout.scss'

const Layout = () => {
  return (
    <div className='layoutContainer'>
    
      <Outlet />
    </div>
  );
};

export default Layout;
