import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../../common/Footer";

const Layout = () => {
  return (
    <div>
      <Header />
      <Footer />
      {/* <Outlet /> */}
    </div>
  );
};

export default Layout;
