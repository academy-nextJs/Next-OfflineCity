import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "react-toastify";

// ساخت axios instance
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://delta-project.liara.run/api",
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.set("Authorization", `Bearer ${token}`);
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        toast.error("باید وارد حساب کاربریت بشی پس لاگین کن!");
      } else if (status === 403) {
        toast.error("دسترسی نداری!");
      } else if (status === 404) {
        toast.error("چیزی پیدا نکردم!");
      } else {
        toast.error("مشکلی پیش اومده. لطفاً دوباره امتحان کن.");
      }
    } else {
      toast.error("ارتباطم با سرور رو از دست دادم.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
