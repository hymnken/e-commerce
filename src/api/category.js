// 分类相关函数接口
import request from '@/utils/request'

/**
 * @returns Promise 获取所有分类
 */
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
