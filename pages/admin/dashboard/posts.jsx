import { useState, useEffect } from "react";
import { getUserBlogs } from "../../../api/blogs";
import { Table } from "react-bootstrap";
import DashboardLayout from "../../../components/layouts/dashboard";
import withRouteProtection from "../../../components/hoc/withRouteProtection";
import Spinner from "../../../components/dashboard/spinner";
import PostsTable from "../../../components/dashboard/posts/table";
import OptionBar from "../../../components/dashboard/posts/optionBar";

const Posts = () => {
  const [blogs, setBlogs] = useState(undefined);

  useEffect(() => {
    const updateBlogs = async () => {
      const blogs = await getUserBlogs();
      setBlogs(blogs);
    };

    updateBlogs();
  }, []);

  return (
    <div className="p-5">
      <OptionBar />
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
