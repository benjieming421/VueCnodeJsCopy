import axios from 'axios'

axios.defaults.baseURL = 'https://cnodejs.org/api/v1'
axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'

// 请求拦截器
axios.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

const request = function (url, para, config, method) {
  return new Promise((resolve, reject) => {
    axios[method](url, para, Object.assign({}, config))
      .then(res => {
        resolve(res)
      }).catch(onerror => {
        reject(onerror)
      })
  })
}

const post = function (url, para, config = {}) {
  return request(url, para, config, 'post')
}

const get = function (url, para, config = {}) {
  return request(url, para, config, 'get')
}

export { post, get }
