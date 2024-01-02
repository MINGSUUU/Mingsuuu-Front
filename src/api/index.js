import axios from "axios";
import { getRefresh } from "./getRefresh";

export const API = axios.create({
  baseURL: "http://192.168.117.15:8088/",
  withCredentials: true,
});
API.interceptors.request.use(getRefresh);
