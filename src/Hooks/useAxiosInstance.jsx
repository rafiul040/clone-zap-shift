import axios from "axios";
import React, { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000/",
});

const useAxiosInstance = () => {

  const { user, logout } = useAuth()
  const navigate = useNavigate()
  useEffect(() => {


    const reqInterCeptor = axiosSecure.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer`
      return config
    })


    const resInterCeptor = axiosSecure.interceptors.response.use((response) => 
      {
        return response;
    }, (error) => {
      console.log(error)

      const statusCode = error.status;
      if(statusCode === 401 || statusCode === 403){
        logout()
        .then(() => {
          navigate('/login')
        })
      }

      return Promise.reject(error)
    } )

    return () => {
      axiosSecure.interceptors.request.eject(reqInterCeptor);
      axiosSecure.interceptors.response.eject(resInterCeptor)
    }



  }, [user, logout, navigate])

  return axiosSecure;
};

export default useAxiosInstance;

