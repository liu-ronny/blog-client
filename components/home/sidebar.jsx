import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/sidebar.module.scss";

export default function Sidebar({ onToggle }) {
  return (
    <div className={"d-flex flex-column " + styles.sidebar}>
      <div className={"p-5 " + styles.header}>
        <div className="d-flex justify-content-between align-items-center">
          <div className={styles.lead}>Ronny Liu</div>
          <div className={styles.closeIcon} onClick={onToggle}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      </div>
      <div className={"flex-grow-1 p-5 " + styles.body}>Hi</div>
    </div>
  );
}
