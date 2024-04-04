import axios from "axios";
//* axiosun ayarlarını bizim belirlediğimiz bir örneğini oluşturmaya yarar
const api = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export default api;
