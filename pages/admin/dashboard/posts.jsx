import React, { useState, useEffect } from "react";
import { getUserBlogs } from "../../../api/blogs";
import useDeleteBlog from "../../../hooks/useDeleteBlog";
import useDashboardContentRef from "../../../hooks/useDashboardContentRef";
import DashboardLayout from "../../../components/layouts/dashboard";
import withRouteProtection from "../../../components/hoc/withRouteProtection";
import Spinner from "../../../components/dashboard/spinner";
import PostsTable from "../../../components/dashboard/posts/table";
import OptionBar from "../../../components/dashboard/posts/optionBar";
import CreatePost from "../../../components/dashboard/posts/create";
import FlashMessage from "../../../components/dashboard/posts/flashMessage";

const Posts = () => {
  const { contentRef } = useDashboardContentRef();

  const [blogs, setBlogs] = useState(undefined);
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [createMessage, setCreateMessage] = useState("");
  const [blogToEdit, setBlogToEdit] = useState(null);
  const { handleDelete, deleteMessage, setDeleteMessage } = useDeleteBlog();

  useEffect(() => {
    const updateBlogs = async () => {
      const blogs = await getUserBlogs();
      setBlogs(blogs);
    };

    updateBlogs();
  }, [createMessage, deleteMessage]);

  useEffect(() => {
    if ((createMessage || deleteMessage) && contentRef.current) {
      contentRef.current.scrollIntoView();
    }
  }, [contentRef, createMessage, deleteMessage]);

  useEffect(() => {
    if (!showCreatePost) {
      contentRef.current.scrollIntoView();
    }
  }, [contentRef, showCreatePost]);

  if (showCreatePost || blogToEdit) {
    return (
      <CreatePost
        onBackClick={() => {
          setShowCreatePost(false);
          setBlogToEdit(null);
        }}
        setShowCreatePost={setShowCreatePost}
        setCreateMessage={setCreateMessage}
        blog={blogToEdit}
      />
    );
  }

  return (
    <div className="p-5">
      {deleteMessage ? (
        <FlashMessage type="delete" message={deleteMessage} />
      ) : null}
      {createMessage ? <FlashMessage message={createMessage} /> : null}
      <OptionBar onCreatePostClick={() => setShowCreatePost(true)} />
      <PostsTable
        blogs={blogs}
        handleDelete={handleDelete}
        setBlogToEdit={setBlogToEdit}
        setDeleteMessage={setDeleteMessage}
      />
    </div>
  );
};

const ProtectedPosts = withRouteProtection(Posts, {
  redirectIf: "loggedOut",
  redirectTo: "/",
  SpinnerComponent: Spinner,
});

ProtectedPosts.layout = DashboardLayout;

export default ProtectedPosts;
