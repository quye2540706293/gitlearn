/*  封装的能发ajax请求的函数*/
import axios from "axios";
import qs from 'qs'


//添加请求拦截器
axios.interceptors.request.use(config => {
  //获取

    const { method, data } = config;
    if (method.toUpperCase() === "POST" && data instanceof Object) {
      config.data = qs.stringify(data);
    }  
    return config;
  });
  //添加响应拦截器
  axios.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      alert("请求移仓");
      console.log(error);
      //终端promise列
      return new Promise(() => {});
    } 
  );

export default axios