import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import Navbar from "../components/home/navbar";
import Sidebar from "../components/home/sidebar";
import Overlay from "../components/home/overlay";
import sidebarStyles from "../components/home/styles/sidebar.module.scss";
import overlayStyles from "../components/home/styles/overlay.module.scss";

export default function Home(props) {
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
    </>
  );
}
