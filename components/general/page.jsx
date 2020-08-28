import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Overlay from "./overlay";
import sidebarStyles from "./styles/sidebar.module.scss";
import overlayStyles from "./styles/overlay.module.scss";

const Page = ({ children }) => {
  const [showSidebar, setSidebar] = useState(false);

  const handleToggle = () => setSidebar(!showSidebar);

  return (
    <>
      <CSSTransition
        in={showSidebar}
        timeout={500}
        classNames={{ ...sidebarStyles }}
      >
        <Sidebar onToggle={handleToggle} />
      </CSSTransition>

      <CSSTransition
        in={showSidebar}
        timeout={300}
        classNames={{ ...overlayStyles }}
      >
        <Overlay onToggle={handleToggle} />
      </CSSTransition>

      <Navbar onToggle={handleToggle} />
      {children}
    </>
  );
};

export default Page;
