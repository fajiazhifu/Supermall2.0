import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL:'http://106.54.54.237:8000/api/h3',
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
