module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Finen's Blog",
      description: 'Stay Hungry! Stay Foolish!'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  serviceWorker: true,
  theme: 'vue',
  themeConfig: {
    repo: 'hirCodd',
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: "Fine's Blog",
            items: [
              { text: 'Java', link: '/blog/Java' },
              { text: 'Python', link: '/language/japanese' },
              { text: 'PHP', link: '/language/japanese' },
              { text: 'Git', link: '/language/japanese' },
              { text: 'Other', link: '/language/japanese' }
            ]
          },
          {
            text: "Book",
            items: [
              { text: '计算机组成原理', link: '/blog/Java' },
              { text: 'Python', link: '/language/japanese' },
              { text: 'PHP', link: '/language/japanese' },
              { text: 'Git', link: '/language/japanese' },
              { text: 'Other', link: '/language/japanese' }
            ]
          },
          {
            text: 'Project',
            link: '/guide/',
          },
          {
            text: 'Resume',
            link: '/config/'
          }
        ],
        sidebar: {
          '/guide/': genSidebarConfig('指南')
        }
      }
    }
  }
}

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'getting-started',
        'basic-config',
        'assets',
        'markdown',
        'using-vue',
        'custom-themes',
        'i18n',
        'deploy'
      ]
    }
  ]
}
