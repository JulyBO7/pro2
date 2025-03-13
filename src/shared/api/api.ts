import axios from "axios";
import { LOCAL_STORAGE_LOGIN_KEY } from "../const/localStorage";

export const $axios = axios.create({
    baseURL: "http://localhost:8000",
    headers: { Authorization: localStorage.getItem(LOCAL_STORAGE_LOGIN_KEY) || false },
});
