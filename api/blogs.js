import axios from "axios";

const root = `${process.env.NEXT_PUBLIC_API_URL}`;

const getAll = async () => {
  const response = await axios.get(`${root}/blogs`);

  return response.data;
};

const getBySlug = async (slug) => {
  const response = await axios.get(`${root}/blogs/${slug}`);

  return response.data;
};

const getUserBlogs = async () => {
  try {
    const response = await axios.get(`${root}/users/my/blogs`, {
      withCredentials: true,
    });
    var blogs = response.data || [];
  } catch (err) {
    var blogs = [];
  }

  return blogs;
};

const createBlog = async (blog) => {
  try {
    var response = await axios.post(`${root}/blogs`, blog, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    if (err.response) {
      return err.response;
    } else if (err.request) {
      return { error: "the server did not respond to the request" };
    } else {
      return { error: err.message };
    }
  }

  return response.data;
};

const deleteBlog = async (id) => {
  try {
    var response = await axios.delete(`${root}/blogs/${id}`, {
      withCredentials: true,
    });
  } catch (err) {
    if (err.response) {
      return err.response;
    } else if (err.request) {
      return { error: "the server did not respond to the request" };
    } else {
      return { error: err.message };
    }
  }

  return response.data;
};

export { getAll, getBySlug, getUserBlogs, createBlog, deleteBlog };
