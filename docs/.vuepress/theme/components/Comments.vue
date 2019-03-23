<template>
    <div class="vcomment" v-if="data.comments === true">
      <div id="vcomments"></div>
    </div>
</template>

<script>
import { isActive, hashRE, groupHeaders } from '../util'
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    },
  },
  mounted: function(){
    this.createValine()
  },
  
  methods: {
    createValine() {
      const Valine = require('valine');
      window.AV = require('leancloud-storage')
      const valine =  new Valine({
        el: '#vcomments',
        appId: 'piM1Wm7mzq4fsj7RfCCJ7slE-gzGzoHsz',
        appKey: 'vdSq43byXijVSfd0Y5qY0vf8',
        notify: false,
        verify: false,
        avatar: 'monsterid',
        path: window.location.pathname,
        placeholder: '欢迎留言与我分享您的想法...',
      });
      this.valineRefresh = false
    }
  },
  watch: {
    '$route' (to, from) {
      if(to.path !==  from.path){
        setTimeout(() => {
          //重新刷新valine
          this.createValine()
        }, 180)
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#vcomments {
  max-width 740px
  padding 10px
  display block;
  margin-left auto;
  margin-right auto;
}
</style>


