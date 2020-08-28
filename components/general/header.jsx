import styles from "./styles/header.module.scss";

export default function Header({ text }) {
  return (
    <div className={"text-center " + styles.container}>
      <span className={styles.text}>{text}</span>
      <hr className={"w-25 " + styles.divider} />
    </div>
  );
}
