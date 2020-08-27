import styles from "./styles/overlay.module.scss";

export default function Overlay({ onToggle }) {
  return <div className={styles.overlay} onClick={onToggle}></div>;
}
