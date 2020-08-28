import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/searchbar.module.scss";
import { Form } from "react-bootstrap";

export default function Searchbar() {
  const [showSearchbar, setSearchbar] = useState(false);

  const handleToggle = () => setSearchbar(!showSearchbar);

  return (
    <div
      className={
        "d-flex justify-content-center align-items-center " + styles.container
      }
    >
      <CSSTransition
        in={showSearchbar}
        timeout={600}
        classNames={{ ...styles }}
      >
        <form className={styles.form}>
          <input type="text" className={"shadow-none " + styles.input} />
        </form>
      </CSSTransition>
      <FontAwesomeIcon
        className={styles.icon}
        icon={faSearch}
        onClick={handleToggle}
      />
    </div>
  );
}
