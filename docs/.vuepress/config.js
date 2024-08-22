module.exports = {
  title: '好习惯 用步鸽',
  description: '早起 · 好睡 · 看书 · 运动 · 冥想 · 专注',
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }]
  ],
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: "有文章更新了",
        buttonText: "刷新"
      }
    },
    '@vuepress/back-to-top': true,
    '@vuepress/register-components': {
      componentsDir: '/components/'
    },
    '@vuepress/google-analytics': {
      'ga': 'UA-**********-*'
    }
  },
  themeConfig: {
    repo: 'ZweiRm/localhost-8080.github.io',
    repoLabel: '查看源码',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '帮助我改善此页面！',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '主页', link: '/',
      },
    ],
  }
}
