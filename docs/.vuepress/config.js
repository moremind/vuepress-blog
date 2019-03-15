const path = require('path')
const container = require('markdown-it-container')

module.exports = {
  dest: 'vuepress',
  title: "Finen",
  description: 'Stay Hungry! Stay Foolish!',
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
  markdown: {
    lineNumbers: true
  },
  evergreen: true,
  activeHeaderLinks: true,
  algolia: {
    apiKey: 'f417527242ae53d1f9d2913eb1ef07d4',
    indexName: 'FinenBlog'
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/container', true],
    ['@vuepress/nprogress', true],
    ['@vuepress/active-header-links', true],
    ['@vuepress/register-components', true],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: true
    }],
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }],
    ['@vuepress/google-analytics', {
      ga: 'UA-131334453-1'
    }],
  ],
  themeConfig: {
    repo: 'hirCodd',
    label: '简体中文',
    selectText: '选择语言',
    nav: require('./nav/index'),
    sidebar: {
      '/blog/git/': genGitSidebarConfig('git学习'),

      // linux
      '/blog/linux/': genLinuxSidebarConfig('Linux学习'),

      // wheel
      '/blog/wheel/': genWheelSidebarConfig('轮子'),

      // other
      '/blog/others/': genOthersSidebarConfig('其他'),

      '/blog/frontend/': genFrontendConfig('前端开发'),

      // record
      '/blog/life-record/': genRecordSidebarConfig('生活随笔'),
      
      '/project/': genPorjectSidebarConfig('项目记录'),

       // java栏目
      '/blog/java/': genJavaArticle(),

      // python栏目
      '/blog/python/': genPythonArticle()
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

function genFrontendConfig (title){
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'wxapp'
      ]
    }
  ]
}

function genJavaArticle() {
  return [
    {
      title: 'Java基础进阶',
      collapsable: true,
      children: [
        '',
      ]
    },
    {
      title: 'Spring',
      children: [ 
        
      ]
    },
    {
      title: 'SpringMVC',
      children: [ 
        
      ]
    },
    {
      title: 'SpringBoot',
      children: [ 
        'springboot/spring-boot',
        'springboot/principle',
        'springboot/conf-file',
        'springboot/profile-file',
        'springboot/conf-file-loading',
        'springboot/auto-configuration'
      ]
    },
    {
      title: 'Mybatis',
      children: [ 
        'mybatis/mybatis-param-process',
        'mybatis/mybatis-select',
        'mybatis/mybatis-dynamicSQL',
        'mybatis/mybatis-cache'
      ]
    },
  ]
}

function genPythonArticle(){
  return [
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
    }]
  
}