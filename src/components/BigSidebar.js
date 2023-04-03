import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import Navlinks from "./Navlinks";
import { useSelector } from "react-redux";
import { stripBasename } from "@remix-run/router";
const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default BigSidebar;
