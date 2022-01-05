const path = require('path')

module.exports = {
  dest: 'vuepress',
  locales: {
    '/': {
      lang: 'en-US',
      title: "SimpleThinking's Blog",
      description: 'Stay Hungry! Stay Foolish!',
    },
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
  markdown: {
    lineNumbers: true
  },
  evergreen: true,
  activeHeaderLinks: true,
  // algolia: {
  //   apiKey: 'f417527242ae53d1f9d2913eb1ef07d4',
  //   indexName: 'FinenBlog'
  // },
  plugins: [
    ['@vuepress/container', {
      type: 'tip',
      locales: {
        '/': {
          defaultInfo: 'TIP',
        },
        '/zh/': {
          defaultInfo: '提示',
        },
      },
    },{
      type: 'warning',
      locales: {
        '/': {
          defaultInfo: 'WARNING',
        },
        '/zh/': {
          defaultInfo: '警告',
        },
      },
    },{
      type: 'danger',
      locales: {
        '/': {
          defaultInfo: 'DANGER',
        },
        '/zh/': {
          defaultInfo: '危险',
        },
      },
    }]
  ],

  // plugins: [
  //   ['@vuepress/active-header-links', {
  //     sidebarLinkSelector: '.sidebar-link',
  //     headerAnchorSelector: '.header-anchor'
  //   }],
  //   ['@vuepress/medium-zoom', {
  //     selector: 'img.zoom-custom-imgs',
  //     // medium-zoom options here
  //     // See: https://github.com/francoischalifour/medium-zoom#options
  //     options: {
  //       margin: 16
  //     }
  //   }],
  //   ['@vuepress/pwa', {
  //     serviceWorker: true,
  //     updatePopup: true
  //   }],
  //   ['@vuepress/search', {
  //     searchMaxSuggestions: 10
  //   }],
  //   ['@vuepress/back-to-top', true],
  //   ['@vuepress/container', true],
  //   ['@vuepress/nprogress', true],
  //   ['@vuepress/register-components', true],
  //   ['@vuepress/google-analytics', {
  //     ga: 'UA-131334453-1'
  //   }]
  // ],
  theme: path.resolve(__dirname, './theme-tassel2/lib/node/index'),
  themeConfig: {
    repo: 'moremind',
    label: '简体中文',
    selectText: '选择语言',
    logo: null,
    navbar: require('./nav/index'),
    sidebar: [],
    editLink: false,
    editLinkText: 'Edit this page',
    editLinkPattern: ':repo/blob/:branch/:path',
    docsRepo: 'https://github.com/moremind/vuepress-blog',
    docsBranch: 'master',
    docsDir: 'docs',
    lastUpdated: false,
    lastUpdatedText: 'Last Updated',
    contributors: false,
    contributorsText: 'Contributors',
    backToHome: 'Back to home',
    toggleDarkMode: 'toggle dark mode',
    // navbar: require('./nav/index'),
    // homePage: 'HomeLayout', // Post or HomeLayout
    valineConfig: {
      appId: 'piM1Wm7mzq4fsj7RfCCJ7slE-gzGzoHsz',
      appKey: 'vdSq43byXijVSfd0Y5qY0vf8',
      notify: false,
      verify: false,
      avatar: 'mm',
      placeholder: 'just go go...😁😁',
      pageSize: 15,
      visitor: true,
      highlight: true,
      recordIP: true
    },
  //   homeConfig: {
  //     homeSrc: 'https://finen-1251602255.cos.ap-shanghai.myqcloud.com/blog/home/hero.png',
  //     nickname: 'Finen',
  //     signature: 'Stay Hungry, Stay Foolish!',
  //     urllink1: 'https://github.com/hirCodd',
  //     urllink1_text: 'Github',
  //     urllink2: 'https://blog.csdn.net/HookJony',
  //     urllink2_text: 'CSDN',
  //     copyright: '2017-present Finen',
  //     beian: '',
  //     github_url: 'https://github.com/hirCodd',
  //     github: 'hirCodd'
  //   },
  //   author: 'Finen',
  //   locales: {
  //     '/': {

  //       // sidebar: {
  //       //   '/blog/others/git/': genGitSidebarConfig('git学习'),
  //       //
  //       //   // linux
  //       //   '/blog/linux/': genLinuxSidebarConfig('Linux学习'),
  //       //
  //       //   // wheel
  //       //   '/blog/others/wheel/': genWheelSidebarConfig('轮子'),
  //       //
  //       //   '/blog/frontend/': genFrontendConfig('前端开发'),
  //       //
  //       //   // record
  //       //   '/blog/others/life-record/': genRecordSidebarConfig('生活随笔'),
  //       //
  //       //   // '/project/': genPorjectSidebarConfig('项目记录'),
  //       //   '/blog/others/server/': genServerSidebarConfig('服务端'),
  //       //
  //       //   // java栏目
  //       //   '/blog/java/': genJavaArticle(),
  //       //
  //       //   // python栏目
  //       //   '/blog/python/': genPythonArticle()
  //       // }
  //     }
  //   }
  // },
  }
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
        'qduoj-development-record',
        'vuepress'
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
        '2018',
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

function genServerSidebarConfig(title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'nginx'
      ]
    }
  ]
}
