/**
 * nuxt 配置文件
 */

module.exports = {
  router: {
    linkActiveClass: 'active',
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
              {
                path: '/login',
                name: 'login',
                component: resolve(__dirname, 'pages/login/'),
              },
              {
                path: '/register',
                name: 'register',
                component: resolve(__dirname, 'pages/login/'),
              },
              {
                path: '/profile/:username',
                name: 'profile',
                component: resolve(__dirname, 'pages/profile/'),
              },
              {
                path: '/settings',
                name: 'settings',
                component: resolve(__dirname, 'pages/settings/'),
              },
              {
                path: '/editor',
                name: 'editor',
                component: resolve(__dirname, 'pages/editor/'),
              },
              {
                path: '/article/:slug',
                name: 'article',
                component: resolve(__dirname, 'pages/article/'),
              },
            ],
          },
        ]
      )
    },
  },
}
