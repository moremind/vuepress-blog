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
            text: "Finen's Blog",
            items: [
              { text: 'Java', link: '/blog/Java/' },
              { text: 'Python', link: '/blog/Python/' },
              { text: 'PHP', link: '/blog/PHP/' },
              { text: 'Git', link: '/blog/git/' },
              { text: 'Wheel', link: '/blog/ds/' },
              { text: 'Other', link: '/blog/other/' }
            ]
          },
          {
            text: 'Book Sharing',
            items: [
              { text: '体系结构与组成原理', items: 
               [
                { text: '组成原理', link: '/book/cu/' },
                
               ] 
              },
              { text: '数据结构', items: 
               [
                { text: '3a', link: '/book/ds/' },
                
               ] 
              },
            ]
          },
          {
            text: 'Project',
            link: '/project/'
          },
          {
            text: 'Resume',
            link: '/about/'
          }
        ],
        sidebar: {
          '/blog/git/': [
            ['', '=>1 git基础'],
            ['git-advanced-command.md', '=>2 git进阶'],
            ['git-remote-command', '=>3 git远端仓库操作'],
            ['git-branch-command.md', '=>4 git分支操作'],
            ['git-cooperate-develop-command.md', '=>5 git合作开发']
          ],
          // java
          '/blog/Java/': [
            {
              title: 'Java基础',
              collapsable: false,
              children: [
                '',
                'qq'
              ]
            },
            {
              title: 'Java进阶',
              children: [ /* ... */ ]
            },
            {
              title: 'Java框架详解',
              children: [ /* ... */ ]
            },
            {
              title: 'Jvm详解',
              children: [ /* ... */ ]
            }
          ],

          // python
          '/blog/Python/': [
            {
              title: '基础',
              
              children: [
                '',
                'qqw'
              ]
            },
            {
              title: '爬虫',
              children: [ 
                '',
              'qqw' ]
            },
            {
              title: '后端开发',
              children: [ /* ... */ ]
            },
            {
              title: 'Other',
              children: [ /* ... */ ]
            }
          ]
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
