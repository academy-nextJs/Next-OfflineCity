import axios, {
  AxiosInstance,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";
import { toast } from "react-toastify";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://delta-project.liara.run/api",
  timeout: 30000,
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
    if (error.code === "ECONNABORTED") {
      toast.error("سرور پاسخ نداد. لطفاً دوباره تلاش کن.");
    } else if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        toast.error("احراز هویت انجام نشد.");
      } else if (status === 403) {
        toast.error("شما اجازه دسترسی ندارید.");
      } else if (status === 404) {
        toast.error("آدرس یافت نشد.");
      } else {
        const data = error.response.data;
        if (data && typeof data === "object" && "message" in data) {
          toast.error((data as { message: string }).message);
        } else {
          toast.error("مشکلی پیش اومده.");
        }
      }
    } else {
      toast.error("ارتباط با سرور برقرار نشد.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
