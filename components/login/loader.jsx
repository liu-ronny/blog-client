import styles from "./styles/loader.module.scss";

export default function FormLoader() {
  return (
    <div
      className={
        "d-flex justify-content-center align-items-center rounded " +
        styles.container
      }
    >
      <div
        className={styles.spinner}
        role="alert"
        aria-busy="true"
        aria-label="Waiting..."
      >
        <div className={styles.bounce1} />
        <div className={styles.bounce2} />
        <div className={styles.bounce3} />
      </div>
    </div>
  );
}
