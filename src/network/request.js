import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000/api/wh',
    timeout:5000
  })

  // axios拦截器
  instance.interceptors.request.use(config => {
     return config
  },error => {
  })

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  },error => {
    console.log(error);
  })

  // 发送真实的网络请求
  return instance(config)
}
