import axios from 'axios'
// import Qs from 'qs'

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

/**
 * 异常处理程序
 */
const errorHandler = error => {
  alert('请求失败')
  if (error.response) {
    // 请求已发出，但服务器响应的状态码不在 2xx 范围内
    console.log(error.response)
    const errorText = codeMessage[error.response.status] || error.response.statusText
    const { status, config } = error.response
    console.log(`请求错误 ${status}:${config.url}${errorText}`)
  } else {
    // 请求没有响应。即网络发生异常，无法连接服务器，比如  浏览器或服务器  断网。
    console.log('网络异常：与服务器断开链接')
  }
  console.log(error.config)
}

// 设置请求超时时间
axios.defaults.timeout = 10000

// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 请求拦截
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么 验证token之类的
  alert('发送请求前')

  return config
}, error => {
  alert('抛出错误')
  // 对请求错误做些什么
  return Promise.error(error)
})

// 响应拦截
axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  alert('响应请求后')
  return response
}, error => {
  alert('响应错误')
  // 对响应错误做点什么
  return Promise.reject(error)
})

// 封装get方法和post方法

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params) {
  // TODO: 显示loading
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      // TODO: 隐藏loading
      resolve(res.data)
    }).catch(err => {
      // TODO: 隐藏loading
      errorHandler(err)
      reject(err)
    })
  })
}

/**
* post方法，对应post请求
* @param {String} url [请求的url地址]
* @param {Object} params [请求时携带的参数]
*/
export function post (url, params) {
  // TODO: 显示loading
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        // TODO: 隐藏loading
        resolve(res.data)
      })
      .catch(err => {
        // TODO: 隐藏loading
        errorHandler(err)
        reject(err)
      })
  })
}