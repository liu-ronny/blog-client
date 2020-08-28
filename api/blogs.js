import axios from "axios";

const root = process.env.DB_URL + "/blogs";

const getAll = async () => {
  const response = await axios.get(root);
  return response.data;
};

const getBySlug = async (slug) => {
  const response = await axios.get(`${root}/${slug}`);
  return response.data;
};

// function create(obj) {
//   const request = axios.post(`${root}/persons`, obj);
//   return request.then((response) => response.data);
// }

// function remove(id) {
//   const request = axios.delete(`${root}/persons/${id}`);
//   return request.then((response) => response.data);
// }

// function replace(id, obj) {
//   const request = axios.put(`${root}/persons/${id}`, obj);
//   return request.then((response) => response.data);
// }

export default {
  getAll,
  getBySlug,
};
