/**
 * function: 实现gitment评论功能，因为要登录所以不是很实用，具体使用方法请百度填写相应的代码id以及属性即可使用！
 * TODO:
 * 1.使用gitment作为评论工具
 * 2.可使用gittalk作为评论工具 
 * 
 */

// function integrateGitment(router) {
//   const linkGitment = document.createElement('link')
//   linkGitment.href = 'https://imsun.github.io/gitment/style/default.css'
//   linkGitment.rel = 'stylesheet'
//   const scriptGitment = document.createElement('script')
//   document.body.appendChild(linkGitment)
//   scriptGitment.src = 'https://imsun.github.io/gitment/dist/gitment.browser.js'
//   document.body.appendChild(scriptGitment)

//   router.afterEach((to) => {
//     // 已被初始化则根据页面重新渲染 评论区
//     if (scriptGitment.onload) {
//       renderGitment(to.fullPath)
//     } else {
//       scriptGitment.onload = () => {
//         const commentsContainer = document.createElement('div')
//         commentsContainer.id = 'comments-container'
//         commentsContainer.classList.add('content')
//         const $page = document.querySelector('.page')
//         if ($page) {
//           $page.appendChild(commentsContainer)
//           renderGitment(to.fullPath)
//         }
//       }
//     }
//   })

//   function renderGitment(fullPath) {
//     const gitment = new Gitment({
//       id: fullPath,
//       owner: 'xxx', // 必须是你自己的github账号
//       repo: 'xxx', // 上一个准备的github仓库
//       oauth: {
//         client_id: 'xxx', // 第一步注册 OAuth application 后获取到的 Client ID
//         client_secret: 'xxx', // 第一步注册 OAuth application 后获取到的 Clien Secret
//       },
//     })
//     gitment.render('comments-container')
//   }
// }

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  // try {
  //   // 生成静态页时在node中执行，没有document对象
  //   document && integrateGitment(router)
  // } catch (e) {
  //   console.error(e.message)
  // }
}