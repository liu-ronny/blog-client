import { Button } from "react-bootstrap";
import styles from "./styles/row.module.scss";

export default function Row({ blog, setBlogToEdit, handleDelete }) {
  return (
    <tr>
      <td>{blog.title}</td>
      <td>{blog.id}</td>
      <td>{blog.author.name}</td>
      <td>
        {blog.tags
          ? blog.tags.map((tag, index, tags) => {
              tag += index !== tags.length - 1 ? "," : "";

              return (
                <span key={tag} className="mr-2">
                  {tag}
                </span>
              );
            })
          : null}
      </td>
      <td>
        {blog.date.month} {blog.date.day}, {blog.date.year}
      </td>
      <td>
        <Button
          className={"mr-3 " + styles.button}
          variant="outline-secondary-green"
          size="sm"
          onClick={() => setBlogToEdit(blog)}
        >
          Edit
        </Button>
        <Button
          className={styles.button}
          variant="outline-dark-red"
          size="sm"
          onClick={() => handleDelete(blog)}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
}
