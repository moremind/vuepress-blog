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
      const valineConfig = this.$themeConfig.valineConfig;
      if (valineConfig) {
        const Valine = require('valine')
        window.AV = require('leancloud-storage')
        // 在themeConfig中可配置valine的参数，参数值与valine官网保持相同
        const valine =  new Valine({
          el: '#vcomments',
          appId: valineConfig.appId,
          appKey: valineConfig.appKey,
          notify: valineConfig.notify,
          verify: valineConfig.verify,
          avatar: valineConfig.avatar,
          placeholder: valineConfig.placeholder,
          pageSize: valineConfig.pageSize,
          visitor: valineConfig.visitor,
          highlight: valineConfig.highlight,
          recordIP: valineConfig.recordIP,
          path: window.location.pathname
        });
        this.valineRefresh = false
      }
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


