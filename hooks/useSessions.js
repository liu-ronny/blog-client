import useSWR from "swr";
import axios from "axios";

const fetcher = async (url) => {
  const response = await axios.get(url, { withCredentials: true });
  const result = response.data;

  return { authenticated: result.authenticated };
};

export default function useAuthentication() {
  const url = process.env.NEXT_PUBLIC_API_URL + "/sessions";
  const { data, error } = useSWR(url, fetcher);
  const res = {};

  res.finished = data ? true : false;
  res.isLoggedIn = data?.authenticated;
  res.error = error;

  return res;
}
