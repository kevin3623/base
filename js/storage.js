/**
 * Created by hs on 2020/1/14
 * 封装localStorage方法,添加ls前缀，防止ls的key值命名污染
 */
import Config from '../../config'

const prefix = Config.APP_NAME // 命名空间，加业务名称的前缀【项目可能会有多个业务 或 事项的】

export default {
  /**
   * 获取一个值
   * @param key
   * @return {*}
   */
  get (key) {
    key = `${prefix}-${key}`
    let value = localStorage.getItem(key)

    if (!value) {
      return null
    }

    return JSON.parse(value)
  },
  /**
   * 存储一个值
   * @param key
   * @param value
   */
  set (key, value) {
    key = `${prefix}-${key}`
    localStorage.setItem(key, JSON.stringify(value))
  },
  /**
   * 删除一个值
   * @param key
   */
  remove (key) {
    key = `${prefix}-${key}`
    localStorage.removeItem(key)
  },
  /**
   * 清空所有值（当前项目命名空间下的key值）
   */
  clear () {
    let len = localStorage.length
    let keys = []

    for (let i = 0; i < len; i++) {
      let key = localStorage.key(i)
      if (key && key.startsWith(prefix)) {
        keys.push(key)
      }
    }

    keys.map(key => localStorage.removeItem(key))
  },
}