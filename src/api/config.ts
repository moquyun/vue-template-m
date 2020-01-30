import axios from 'axios'

import { Notify, Toast } from 'vant'
import Router from '@/router'

// 取消请求
const CancelToken = axios.CancelToken
// 设置默认请求头
axios.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json;charset=utf-8'
}
axios.defaults.baseURL = '/api'
// 请求超时的时间限制
axios.defaults.timeout = 20000
// 开始设置请求 发起的拦截处理
// config 代表发起请求的参数的实体
let loadingService: any
let loadingTimes: number = 0
let messageCode: any[] = [] // 报错信息内容
axios.interceptors.request.use(
  (config: any) => {
    //   "X-QMP-TOKEN": (JSON.parse(sessionStorage.getItem("userInfo")) || {}).token
    const userInfo = <string>sessionStorage.getItem('userInfo')
    config.headers['X-QMP-TOKEN'] = (JSON.parse(userInfo) || {}).token
    // loadingService = Loading.service({
    //   lock: true,
    //   text: '加载中',
    //   spinner: 'el-icon-loading',
    //   background: 'rgba(255, 255, 255, 0.5)'
    // })
    loadingService = Toast.loading({
      message: '加载中...',
      forbidClick: true
    })
    loadingTimes++

    return config
  },
  (error: any) => {
    loadingTimes--
    if (loadingTimes <= 0) setTimeout(() => loadingService.clear(), 200)
    return Promise.reject(error)
  }
)

// 请求到结果的拦截处理
axios.interceptors.response.use(
  (config: any) => {
    loadingTimes--
    if (loadingTimes <= 0) setTimeout(() => loadingService.clear(), 200)

    const { code, message, data } = config.data
    if (code === 200) return data
    if (code === 10002) {
      Router.push({
        path: '/login'
      })
      // 禁止重复报错
      if (!messageCode.some((value: any) => value === code)) {
        messageCode.push(code)
        Notify({
          type: 'warning',
          message: '登录失效，请重新登录！',
          onClose () {
            messageCode = messageCode.filter((value: any) => value !== code)
          }
        })
        return Promise.reject(config.data)
      }
      if (messageCode.some((value: any) => value === code)) { return Promise.reject(config.data) }
    }
    if (code !== 31000) {
      // 禁止重复报错
      if (!messageCode.some((value: any) => value === code)) {
        messageCode.push(code)
        Notify({
          type: 'warning',
          message: message || '系统异常，请联系管理员！',
          onClose () {
            messageCode = messageCode.filter((value: any) => value !== code)
          }
        })
        return Promise.reject(config.data)
      }
      if (messageCode.some((value: any) => value === code)) { return Promise.reject(config.data) }
    }
  },
  (error: any) => {
    loadingTimes--
    if (loadingTimes <= 0) setTimeout(() => loadingService.clear(), 200)

    // 禁止重复报错
    if (!messageCode.some((value: any) => value === error)) {
      messageCode.push(error)
      Notify({
        type: 'warning',
        message: '系统异常，请联系管理员！',
        onClose () {
          messageCode = messageCode.filter((value: any) => value !== error)
        }
      })
      return Promise.reject(error)
    }
    if (messageCode.some((value: any) => value === error)) { return Promise.reject(error) }
    // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
  }
)
export default axios
