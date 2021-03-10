import { request } from '@/plugins/request'

// 更新个人信息
export const login = (params) => {
  return request({
    method: 'PUT',
    url: '/api/user',
    params,
  })
}
