import { useState, useEffect } from "react";
import { getUserBlogs } from "../../../api/blogs";
import DashboardLayout from "../../../components/layouts/dashboard";
import withRouteProtection from "../../../components/hoc/withRouteProtection";
import Spinner from "../../../components/dashboard/spinner";
import PostsTable from "../../../components/dashboard/posts/table";
import OptionBar from "../../../components/dashboard/posts/optionBar";
import CreatePost from "../../../components/dashboard/posts/create";

const Posts = () => {
  const [blogs, setBlogs] = useState(undefined);
  const [showCreatePost, setShowCreatePost] = useState(false);

  useEffect(() => {
    const updateBlogs = async () => {
      const blogs = await getUserBlogs();
      setBlogs(blogs);
    };

    updateBlogs();
  }, []);

  if (showCreatePost) {
    return <CreatePost onBackClick={() => setShowCreatePost(false)} />;
  }

  return (
    <div className="p-5">
      <OptionBar onCreatePostClick={() => setShowCreatePost(true)} />
      <PostsTable blogs={blogs} />
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
