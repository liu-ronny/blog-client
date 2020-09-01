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

export { getAll, getBySlug, getUserBlogs };
