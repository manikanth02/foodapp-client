import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://foodapp-server-9cnk.onrender.com/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
