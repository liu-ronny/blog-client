import axios from "axios";

const root = `${process.env.API_URL}/blogs`;

const getAll = async () => {
  const response = await axios.get(root);
  return response.data;
};

const getBySlug = async (slug) => {
  const response = await axios.get(`${root}/${slug}`);
  return response.data;
};

export { getAll, getBySlug };
