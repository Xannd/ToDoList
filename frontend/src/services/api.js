import axios from "axios";

const Api = axios.create({
  baseURL:"http://192.168.10.157:3333/",
});

export default Api;