/**
 * nuxt 配置文件
 */

module.exports = {
  router: {
    extendRoutes(routes, resolve) {
      // 清空 nuxt 默认按 pages 生成的路由
      routes.splice(0)
      routes.push(
        ...[
          {
            path: '/',
            component: resolve(__dirname, 'pages/layout/'),
            children: [
              {
                path: '', // 默认子路由
                name: 'home',
                component: resolve(__dirname, 'pages/home/'),
              },
            ],
          },
        ]
      )
    },
  },
}
