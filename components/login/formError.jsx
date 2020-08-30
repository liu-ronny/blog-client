import styles from "./styles/formError.module.scss";
import classnames from "classnames";

export default function FormError({ show, className, children }) {
  if (!show) {
    return null;
  }

  const errorClassNames = classnames(styles.error, { [className]: className });

  return <span className={errorClassNames}>{children}</span>;
}
