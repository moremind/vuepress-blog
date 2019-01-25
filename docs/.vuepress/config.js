const path = require('path')
const container = require('markdown-it-container')

module.exports = {
  dest: 'vuepress',
  // ga: "UA-131334453-1",
  plugins: {
    '@vuepress/pwa': {
       serviceWorker: true,
       popupComponent: 'MySWUpdatePopup',
       updatePopup: true
     }
  },
  plugins: ['@vuepress/pwa'],
  plugins: [
    ['@vuepress/google-analytics', {
        ga: 'UA-131334453-1'//你的Google Analytics ID
    }],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Finen",
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
    editLinks: false,
    docsDir: 'docs',
    lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间
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
              { text: 'Java', link: '/blog/java/' },
              { text: 'Python', link: '/blog/python/' },
              { text: 'PHP', link: '/blog/php/' },
              { text: 'Git', link: '/blog/git/' },
              { text: 'Linux', link: '/blog/linux/'},
              { text: 'Wheel', link: '/blog/wheel/' },
              { text: 'Other', link: '/blog/others/'},
              { text: '生活随记', link: '/blog/life-record/'}
              
            ]
          },
          {
            text: 'Tools Sharing',
            items: [
              { text: 'Book Sharing', link: '/share/book/' },
              { text: 'Software Sharing', link: '/share/software/' }
            ]
          },
          {
            text: 'Project',
            link: '/project/'
          },
          {
            text: 'Resume',
            link: '/about/'
          },
          {
            text: 'Friends',
            link: '/friends/'
          },
          {
            text: 'Tags',
            link: '/tags/'
          },
        ],

        sidebar: {
          '/project/':genPorjectSidebarConfig('Project'),
          

          // git
          '/blog/git/': genGitSidebarConfig('git学习'),

          // linux
          '/blog/linux/': genLinuxSidebarConfig('Linux学习'),

          // wheel
          '/blog/wheel/': genWheelSidebarConfig('Linux学习'),

          // other
          '/blog/others/': genOthersSidebarConfig('Linux学习'),

          // record
          '/blog/life-record/': genRecordSidebarConfig('生活随笔'),

          // java栏目
          '/blog/java/': [
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
              children: [ 
                '',
                'qq'
               ]
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

          // python栏目
          '/blog/python/': [
            {
              title: 'Python基础',
              collapsable: true,
              children: [
                '',
              ]
            },
            {
              title: 'Python爬虫',
              children: [ 
                'selenium-api-docs',
                'python-crawling-toutiao-picture'
               ]
            },
            {
              title: 'Python后端',
              children: [ /* ... */ ]
            },
            {
              title: 'Other',
              children: [ /* ... */ ]
            }
          ],

          
        }
      }
    }
  },
}

function genGitSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'git-advanced-command',
        'git-remote-command',
        'git-branch-command',
        'git-cooperate-develop-command'
      ]
    }
  ]
}

function genLinuxSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'linux-use-root-accout-login',
        'linux-ubuntu-pip-ssl-module-not-setup',
        'linux-setup-usual-software',
        'linux-nginx-basic-command',
        'linux-python2-python3-setup-use',
        'linux-manjaro'
      ]
    }
  ]
}

function genWheelSidebarConfig(title){
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
      ]
    }
  ]
}

function genOthersSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'qduoj-development-record'
      ]
    }
  ]
}

function genRecordSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        '2019'
      ]
    }
  ]
}

function genPorjectSidebarConfig(title){
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'qduoj-add-problem',
      ]
    }
  ]
}
