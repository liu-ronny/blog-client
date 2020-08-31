import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import BlogCard from "./blogCard";
import styles from "./styles/blogs.module.scss";

export default function Blogs({ error, blogs }) {
  return error ? (
    <div>
      <div className={"text-center mb-5 " + styles.error}>
        <FontAwesomeIcon icon={faExclamationTriangle} />{" "}
      </div>
      <p className="text-center">{error.message}</p>
    </div>
  ) : (
    blogs.map((blog) => {
      return <BlogCard key={blog.id} className={styles.blogCard} blog={blog} />;
    })
  );
}
