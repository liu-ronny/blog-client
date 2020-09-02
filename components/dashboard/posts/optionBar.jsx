import { Nav, Button, Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faSort,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./styles/optionBar.module.scss";

export default function OptionBar({ onCreatePostClick }) {
  return (
    <div className={"d-flex mb-3 " + styles.container}>
      <Dropdown className="mr-3">
        <Dropdown.Toggle
          className="rounded-0"
          variant="outline-secondary-green"
          size="sm"
        >
          Sort by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle
          className="rounded-0"
          variant="outline-secondary-green"
          size="sm"
        >
          Filter by
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <FontAwesomeIcon
        className={"ml-auto " + styles.createIcon}
        onClick={onCreatePostClick}
        icon={faPlusCircle}
      />
    </div>
  );
}
