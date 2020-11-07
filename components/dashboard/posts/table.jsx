import { Table } from "react-bootstrap";
import Row from "./row";
import styles from "./styles/table.module.scss";

export default function TableComponent({ blogs, setBlogToEdit, handleDelete }) {
  if (!blogs) {
    return null;
  }

  return (
    <>
      <Table className={styles.container} bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Id</th>
            <th>Author</th>
            <th>Tags</th>
            <th>Date</th>
            <th>Manage</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => {
            return (
              <Row
                key={blog.id}
                blog={blog}
                setBlogToEdit={setBlogToEdit}
                handleDelete={handleDelete}
              />
            );
          })}
        </tbody>
      </Table>
    </>
  );
}
