import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export async function getRequest(url: string) {
  try {
    const { data } = await axiosClient.get(url);
    return data;
  } catch (e) {
    return e;
  }
}
