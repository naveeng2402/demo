import { Outlet } from "react-router-dom";
import { Header, MegaMenu } from "../components";

const Layout = () => {
  return (
    <div>
      <Header />
      <MegaMenu />
      <Outlet />
    </div>
  );
};

export default Layout;
