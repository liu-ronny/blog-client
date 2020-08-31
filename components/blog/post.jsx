import Meta from "../general/meta";
import styles from "./styles/post.module.scss";
import { Container } from "react-bootstrap";

export default function Post({ blog }) {
  return (
    <div className={"mx-auto " + styles.container}>
      <div className={"text-center " + styles.title}>{blog.title}</div>
      <Meta blog={blog} center />
      <div className={"mt-5"}>{blog.body}</div>
    </div>
  );
}
