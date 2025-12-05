import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";
import { getAuth } from "firebase/auth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000/",
});

const useAxiosInstance = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const reqInterceptor = axiosSecure.interceptors.request.use(
      async (config) => {
        const auth = getAuth();
        const currentUser = auth.currentUser;

        if (currentUser) {
          const token = await currentUser.getIdToken();
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      }
    );

    const resInterceptor = axiosSecure.interceptors.response.use(
      (response) => response,
      (error) => {
        const statusCode = error?.response?.status;

        if (statusCode === 401 || statusCode === 403) {
          logout().then(() => {
            navigate("/login");
          });
        }

        return Promise.reject(error);
      }
    );

    return () => {
      axiosSecure.interceptors.request.eject(reqInterceptor);
      axiosSecure.interceptors.response.eject(resInterceptor);
    };
  }, [user, logout, navigate]);

  return axiosSecure;
};

export default useAxiosInstance;
