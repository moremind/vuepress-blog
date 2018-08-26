<template>
    <div class="vcomment" v-if="data.comments === true">
      <div id="vcomments"></div>
    </div>
</template>

<script>
export default {
  computed: {
    data () {
      return this.$page.frontmatter
    },
  },

  mounted: function() {
    const Valine = require('valine');
    
    this.window = window
    window.AV = require('leancloud-storage')
    
    new Valine({
      el: '#vcomments' ,
      appId: 'piM1Wm7mzq4fsj7RfCCJ7slE-gzGzoHsz',
      appKey: 'vdSq43byXijVSfd0Y5qY0vf8',
      notify: true,
      verify: false,
      avatar: 'mm',
      placeholder: '欢迎留言与我分享您的想法...'
    });
  },

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#vcomments {
  width 58%
  padding 10px
  display block;
  margin-left auto;
  margin-right auto;
}
</style>


