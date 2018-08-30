<template>
    
    <div class="vcomment" v-if="data.comments === true">
    <!-- <div class="vcomment">  -->
      <div id="vcomments"></div>
    </div>
</template>

<script>
import { isActive, hashRE, groupHeaders } from './util'
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    },
  },
  mounted: function(){
      this.$router.beforeEach((to, from, next) => {
      next()
    })

    const Valine = require('valine');
    window.AV = require('leancloud-storage')
    new Valine({
      el: '#vcomments',
      appId: 'piM1Wm7mzq4fsj7RfCCJ7slE-gzGzoHsz',
      appKey: 'vdSq43byXijVSfd0Y5qY0vf8',
      notify: true,
      verify: false,
      avatar: 'monsterid',
      placeholder: '欢迎留言与我分享您的想法...'
    })
  },
    watch: {
    '$route' (to, from) {
      // 因为不是很懂vue，所以刷新使用这个来写。哈哈哈，不知道如何组件内刷新。有了解的请联系我：hefengen@hotmail.com
      /**
       * TODO:
       * 1. 使用其他方法更新评论组件 或者使用其他较为好用的评论组件
       * 2. 添加categories and tag
       * 3. 跟换其他主题
       */
      location.assign(location)
      // this.$router.go(0)
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#vcomments {
  width 68%
  padding 10px
  display block;
  margin-left auto;
  margin-right auto;
}
</style>


