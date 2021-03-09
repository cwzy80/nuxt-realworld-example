import request from '@/utils/request'

// 获取公共的文章列表
export const getArticles = (params) => {
  return request({
    method: 'GET',
    url: '/api/articles',
    params,
  })
}

// 获取关注的文章列表
export const getFeedArticles = (params) => {
  return request({
    method: 'GET',
    url: '/api/articles/feed',
    headers: {
      Authorization: `Token "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTQ1NjkwLCJ1c2VybmFtZSI6InlhbnFpbmciLCJleHAiOjE2MjA0NzU5NDF9.FFJ3nMROlFQ-eXcr4_0pa-Hn-E0j6pZucGF_0Df5KJI"`,
    },
    params,
  })
}
