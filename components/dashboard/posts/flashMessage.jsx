import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import classnames from "classnames";
import styles from "./styles/flashMessage.module.scss";

export default function FlashMessage({ type, message }) {
  const className = classnames("p-2", "mb-3", {
    [styles.delete]: type === "delete",
    [styles.create]: type !== "delete",
  });
  const icon = type === "delete" ? faExclamationCircle : faCheckCircle;

  return (
    <div className={className}>
      <FontAwesomeIcon className="mr-2" icon={icon} />
      {message}
    </div>
  );
}
