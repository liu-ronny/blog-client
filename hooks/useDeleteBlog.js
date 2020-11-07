import { useState } from "react";
import { deleteBlog } from "../api/blogs";

export default function useDeleteBlog() {
  const [showWarning, setShowWarning] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [deleteMessage, setDeleteMessage] = useState("");

  const handleDelete = async (blog) => {
    setShowWarning(false);
    setDeleteMessage("");
    setDeleting(true);

    const response = await deleteBlog(blog.id);

    if (response?.error) {
      setDeleteMessage(response.error);
    } else {
      setDeleteMessage(`Successfully deleted ${blog.title}`);
      setTimeout(() => setDeleteMessage(""), 10000);
    }

    setDeleting(false);
  };

  return {
    showWarning,
    setShowWarning,
    deleting,
    setDeleting,
    deleteMessage,
    setDeleteMessage,
    handleDelete,
  };
}
