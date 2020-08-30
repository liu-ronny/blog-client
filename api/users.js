import axios from "axios";

const root = `${process.env.NEXT_PUBLIC_API_URL}/login`;

const login = async (username, password) => {
  try {
    await axios.post(root, { username, password }, { withCredentials: true });
  } catch (err) {
    const unauthorized = err.response && err.response.status === 401;

    return {
      authenticated: false,
      error: unauthorized ? "Invalid username or password" : err.message,
    };
  }

  return { authenticated: true };
};

export { login };
